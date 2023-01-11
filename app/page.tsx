import Footer from "../components/Footer";

export default function Page() {
  return (
    <main>
      <div className="mb-24 w-1/2">
        <h1 className="text-6xl">
          Welcome to Code Craft © Where designers learn to code.
        </h1>
        <div className="flex flex-col my-8">
          <a href="https://www.youtube.com/@code-craft">
            --{">"} Watch on YouTube
          </a>
          <a href="https://www.github.com/brijr/codecraft">
            --{">"} Star on GitHub
          </a>
        </div>
        <p>
          Are you a designer looking to add coding skills to your toolkit? Look
          no further than Code Craft - the YouTube channel that teaches coding
          to designers. Our channel is full of helpful coding tutorials for
          designers of all levels, from beginners to experienced coders. We
          cover topics from the basics of HTML and CSS to more advanced topics
          like React and NextJS. Don&apos;t be intimidated if coding seems
          daunting - our tutorials are easy to follow and we break down the
          concepts into easy-to-understand chunks. So come along and join us on
          our coding journey - you won&apos;t regret it!
        </p>
      </div>
      <Footer />
    </main>
  );
}
