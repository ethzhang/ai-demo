import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
import ScenarioDropDown, {ScenarioType} from "../components/ScenarioDropDown";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState("");
  const [lang, setLang] = useState<VibeType>("中文");
  const [scenario, setScenario] = useState<ScenarioType>("课程及活动");
  const [generatedIntro, setGeneratedIntro] = useState<string>("");

  console.log("Streamed response: ", generatedIntro);
  
  let promptObj = {
    "中文": "Simplified Chinese",
    'English': "UK English",
    // "繁體中文": "Traditional Chinese",
    // "日本語": "Japanese",
    // "Italiano": "Italian",
    // "Deutsch": "German",
    // "Español": "Spanish",
    // "Français": "French",
    // "Nederlands": "Dutch",
    // "한국어": "Korean",
    // "ភាសាខ្មែរ":"Khmer",
    // "हिंदी" : "Hindi"
  }

  let defaultDesc = "How to make fun with GPT3";

  let text = desc || defaultDesc;

  let prompts = {
    '课程及活动' : `Generate an online course introduction in ${promptObj[lang]} that is friendly but has academic language. Use a very eye-catching title, and then display the content in a list format 
    The final paragraph starts with emoji, and should be provocative and entice users to sign up.
    The course title is ${text}${text.slice(-1) === "." ? "" : "."}
    `,

    '朋友圈文案' : `微信朋友圈的风格是个性化、生活化、简单易懂，轻松幽默。以第一人称的方式呈现，加入自己的感受，内容真实吸引人，使用简单而有趣的文字，例如短语，俚语和网络流行语等。配上一些表情符号，增强文章的趣味性和可读性。不加 hashtag
    请使用微信朋友圈的风格写一个${promptObj[lang]}推广文案， 推广内容的介绍是${text}${text.slice(-1) === "." ? "" : "."}
    `,

    '小红书文案' : `小红书文案的风格是简约、生动、有趣，让用户感到亲切友好。带有流行、时尚、购物元素。鼓励用户发现、了解、使用产品。使用很吸引眼球的标题。内容以列表形式呈现，句子丰富一点，在每个列表开头都加不同的emoji 。结尾总结并吸引用户，文字最后加一些 hashtag。
    
    请使用小红书的风格写一个${promptObj[lang]}推广文案， 推广内容的介绍是${text}${text.slice(-1) === "." ? "" : "."} 
    `,
  }

  const prompt = prompts[scenario];

  const generateDesc = async (e: any) => {
    e.preventDefault();
    setGeneratedIntro("");
    setLoading(true);

    console.log(prompt);

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    console.log("Edge function returned.");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedIntro((prev) => prev + chunkValue);
    }

    setLoading(false);
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>ClassNow AI Helper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4">
        <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900 mt-10">
          Generate promotional copywriting in seconds
        </h1>
        {/* <p className="text-slate-500 mt-5">3,508 copywritings generated so far.</p> */}
        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            <span className="w-7 h-7 rounded-full bg-black text-white text-center leading-7">1</span>
            <p className="text-left font-medium">
              Write a few sentence about the course.
            </p>
          </div>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mt-5"
            placeholder={
              "e.g. " + defaultDesc
            }
          />
          <div className="flex my-4 items-center space-x-3">
          <span className="w-7 h-7 rounded-full bg-black text-white text-center leading-7">2</span>
            <p className="text-left font-medium">Select where you want to post it.</p>
          </div>
          <div className="block">
            <ScenarioDropDown scenario={scenario} setScenario={(newScenario) => setScenario(newScenario)} />
          </div>

          <div className="flex my-4 items-center space-x-3">
          <span className="w-7 h-7 rounded-full bg-black text-white text-center leading-7">3</span>
            <p className="text-left font-medium">Select your preferred language.</p>
          </div>
          <div className="block">
            <DropDown vibe={lang} setVibe={(newLang) => setLang(newLang)} />
          </div>

          {!loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              onClick={(e) => generateDesc(e)}
            >
              Generate copywriting &rarr;
            </button>
          )}
          {loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="space-y-10 my-10">
              {generatedIntro && (
                <>
                  <div>
                    <h2 className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto">
                      Your generated copywriting
                    </h2>
                  </div>
                  <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto whitespace-pre-wrap">
                    
                    <div
                      className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border text-left"
                      onClick={() => {
                        navigator.clipboard.writeText(generatedIntro);
                        toast("Copywriting copied to clipboard", {
                          icon: "✂️",
                        });
                      }}
                    >
                      <p>{generatedIntro}</p>
                    </div>
                       
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
