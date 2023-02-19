# [ClassNow Helper](https://classnow-helper.vercel.com/)

ClassNow AI Helper is an automated tool for generating course descriptions and marketing copywriting. Using the powerful natural language processing capabilities of `OpenAI`, it can generate high-quality course descriptions and marketing copy. Additionally, the tool supports publishing to various social media platforms, including classnow websites, WeChat Moments, Xiaohongshu, Twitter, and Facebook.

The project is built using [Vercel](https://vercel.com) and [Next.js](https://nextjs.org/) technologies, allowing the tool to quickly respond to user requests and support high concurrency.

## Usage
Users can visit the [ClassNow AI Helper](https://ai.theclassnow.com) website, input the relevant course information, including course name, course description, instructor introduction, etc., and click the "Generate" button to obtain high-quality course descriptions and marketing copy. Users can select different publishing platforms as needed and publish the generated copy to the appropriate platform.

## Technical Details

Inspired by [TwtterBio](https://github.com/Nutlope/twitterbio) and [Danny Richman](https://twitter.com/DannyRichman/status/1598254671591723008?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1598254671591723008%7Ctwgr%5Eb7deab6eb03d86a1b9ac13f7e38cdeab57a40cbb%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.buzzfeednews.com%2Farticle%2Ftomwarren%2Fai-app-dyslexic-email-writer-help). Powerd by [OpenAI](https://openai.com/), [Next.js](https://nextjs.org/), [Vercel](https://vercel.com/) and [Tailwind CSS](https://tailwindcss.com/).

ClassNow AI Helper uses the OpenAI model to generate course descriptions and marketing copy. The model is a natural language processing model based on the Transformer architecture developed by OpenAI, with powerful text generation capabilities. By learning from a large amount of text data, the model can automatically learn language patterns and generate high-quality text content.

The project uses  [Vercel](https://vercel.com) and [Next.js](https://nextjs.org/) technology to build a web application. Vercel is a modern cloud platform that can quickly deploy static websites, web applications, and APIs. Next.js is a popular React framework that can quickly build modern web applications. By using these technologies, ClassNow AI Helper can quickly respond to user requests and support high concurrency.

## Run Locally
If you want to run ClassNow AI Helper locally, you need to complete the following steps:

1. Clone the project to your local machine.

``` bash
git https://github.com/ethzhang/classnow-ai-helper.git
``` 
2. Install dependencies.

``` bash
cd classnow-ai-helper
npm install
```
3. Start the application.

After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

## Contributing
If you are interested in this project and would like to contribute code, please complete the following steps:

1. Fork the project.
2. Create a new branch.
``` bash
git checkout -b <branch-name>
```

3. Make your changes.

4. Commit your changes.

``` sql
git add .
git commit -m "your message"
git push origin <branch-name>
```

5. Create a pull request.

If you have any suggestions or questions, please raise an issue, and we will respond as soon as possible.

## License

ClassNow AI Helper is released under the MIT license. You are free to use and modify the project as long as you comply with the terms of the license. Please refer to the LICENSE file for more information.

## Acknowledgments
We would like to express our sincere gratitude to OpenAI for developing the powerful ChatGPT model and making it available for use. We would also like to thank the Next.js and Vercel communities for providing excellent technology support for this project.

## Contact Us
If you have any questions, suggestions, or issues, please feel free to contact us via email at [support@classnow.com](mailto:support@classnow.com). We welcome any feedback and would be happy to help you with any questions or concerns you may have.