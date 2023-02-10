import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState("");
  const [lang, setLang] = useState<VibeType>("English");
  const [generatedIntro, setGeneratedIntro] = useState<string>("");

  console.log("Streamed response: ", generatedIntro);
  
  let promptObj = {
    'English': "UK English",
    "中文": "Simplified Chinese",
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

  const prompt =
    `Generate an online course introduction in ${promptObj[lang]} that is friendly but has academic language. Use a very eye-catching title, and then display the content in a list format 
    The final paragraph starts with emoji, and should be provocative and entice users to sign up.
    The course title is ${text}${text.slice(-1) === "." ? "" : "."}
    `;


  const generateDesc = async (e: any) => {
    e.preventDefault();
    setGeneratedIntro("");
    setLoading(true);
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
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900">
          Generate online course introduction in seconds
        </h1>
        {/* <p className="text-slate-500 mt-5">18,167 bios generated so far.</p> */}
        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            <Image
              src="/1-black.png"
              width={30}
              height={30}
              alt="1 icon"
              className="mb-5 sm:mb-0"
            />
            <p className="text-left font-medium">
              Write a few sentence about the course.
            </p>
          </div>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={
              "e.g. " + defaultDesc
            }
          />
          <div className="flex mb-5 items-center space-x-3">
            <Image src="/2-black.png" width={30} height={30} alt="1 icon" />
            <p className="text-left font-medium">Select your vibe.</p>
          </div>
          <div className="block">
            <DropDown vibe={lang} setVibe={(newLang) => setLang(newLang)} />
          </div>

          {!loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              onClick={(e) => generateDesc(e)}
            >
              Generate course intro &rarr;
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
                      Your generated course intro
                    </h2>
                  </div>
                  <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto whitespace-pre-wrap">
                    
                    <div
                      className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border text-left"
                      onClick={() => {
                        navigator.clipboard.writeText(generatedIntro);
                        toast("Course intro copied to clipboard", {
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
