import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
import ScenarioDropDown, { ScenarioType } from "../components/ScenarioDropDown";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState("");
  const [lang, setLang] = useState<VibeType>("中文");
  const [scenario, setScenario] = useState<ScenarioType>("Courses & Events\t|\t课程及活动");
  const [generatedIntro, setGeneratedIntro] = useState<string>("");

  console.log("Streamed response: ", generatedIntro);

  let promptObj = {
    中文: "Simplified Chinese",
    English: "UK English",
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
  };

  let defaultDesc = "How to make fun with GPT3";

  let text = desc || defaultDesc;

  let prompts = {
    "Courses & Events\t|\t课程及活动": `Generate an online course introduction in ${
      promptObj[lang]
    } that is friendly but has academic language. Use a very eye-catching title, and then display the content in a list format 
    The final paragraph starts with emoji, and should be provocative and entice users to sign up.
    The course title is: ${text}${text.slice(-1) === "." ? "" : "."}`,

    "WeChat Moments\t|\t朋友圈文案": `微信朋友圈的风格是个性化、生活化、简单易懂，轻松幽默。以第一人称的方式呈现，加入自己的感受，内容真实吸引人，使用简单而有趣的文字，例如短语，俚语和网络流行语等。配上一些表情符号，增强文章的趣味性和可读性。不加 hashtag
    请使用微信朋友圈的风格写一个${
      promptObj[lang]
    }推广文案， 推广内容的介绍是：${text}${text.slice(-1) === "." ? "" : "."}`,

    "Xiaohongshu\t|\t小红书文案": `小红书文案的风格是简约、生动、有趣，让用户感到亲切友好。带有流行、时尚、购物元素。鼓励用户发现、了解、使用产品。使用很吸引眼球的标题。内容以列表形式呈现，句子丰富一点，在每个列表开头都加不同的emoji 。结尾总结并吸引用户，文字最后加一些 hashtag。
    
    请使用小红书的风格写一个${
      promptObj[lang]
    }推广文案， 推广内容的介绍是：${text}${text.slice(-1) === "." ? "" : "."} `,

    "TikTok\t|\t抖音": `抖音是一款注重内容和互动的短视频应用，它的风格是短小精悍，情感化，有趣有料，非常口语化，吸引用户注意力和产生共鸣。避免使用过于商业化的语言。带有流行，购物，营销元素。结尾添加一些 hashtag

    请使用抖音的风格写一个${
      promptObj[lang]
    }推广文案， 推广内容的介绍是：${text}${text.slice(-1) === "." ? "" : "."}`,

    "WeChat Channels\t|\t微信视频号": `微信视频号语言风格是简洁生动，亲切自然，富有表现力和情感化的。以轻松活泼为主，尽量贴近用户的口感，易于理解和接受。 通常会采用大众化的语言和流行的网络用语，通过引起共鸣、制造情感冲击等方式，让用户更容易产生共鸣和记忆深刻。在营销方面，微信视频号的文案往往会采用强调产品特点和品牌形象的方式，激发用户的购买欲望。
    
    请使用微信视频号的风格写一个${
      promptObj[lang]
    }推广文案， 推广内容的介绍是：${text}${text.slice(-1) === "." ? "" : "."}
    `,

    "Twitter\t|\t推特": `Generate a series of short and attention-grabbing Twitter copywriting for a new online course in ${
      promptObj[lang]
    }. The course title is: ${text}${text.slice(-1) === "." ? "" : "."}

    The copywriting style should be concise, highlighting the unique features of the product. Use emotional language to capture users" attention and encourage interaction. Include a clear Call to Action, such as asking users to join the discussion, visit the official website, and register. The copy should be kept within 280 characters.`,

    "LinkedIn\t|\t领英": `LinkedIn的营销文案风格应该是专业、正式、知识性强、注重数据和事实， 同时也要充满热情和动人心弦的感性表达，以吸引受众的注意。在语言上要准确、简洁，措辞要得体，注意语法和标点的正确性，避免使用口语化、夸张、引人注目但不严谨的语言。另外，还要关注行业热点和趋势，加入关键词和标签，以提高搜索和曝光度。

    请使用LinkedIn的风格写一个${
      promptObj[lang]
    }推广文案， 推广内容的介绍是${text}${text.slice(-1) === "." ? "" : "."} `,
  };

  const prompt = prompts[scenario];

  const generateDesc = async (e: any) => {
    e.preventDefault();
    setGeneratedIntro("");
    setLoading(true);

    // console.log(prompt);

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
            <span className="w-7 h-7 rounded-full bg-black text-white text-center leading-7">
              1
            </span>
            <p className="text-left font-medium">
              Write a few sentence about the course.
            </p>
          </div>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mt-5"
            placeholder={"e.g. " + defaultDesc}
          />
          <div className="flex my-4 items-center space-x-3">
            <span className="w-7 h-7 rounded-full bg-black text-white text-center leading-7">
              2
            </span>
            <p className="text-left font-medium">
              Select where you want to post it.
            </p>
          </div>
          <div className="block">
            <ScenarioDropDown
              scenario={scenario}
              setScenario={(newScenario) => setScenario(newScenario)}
            />
          </div>

          <div className="flex my-4 items-center space-x-3">
            <span className="w-7 h-7 rounded-full bg-black text-white text-center leading-7">
              3
            </span>
            <p className="text-left font-medium">
              Select your preferred language.
            </p>
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
