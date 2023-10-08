import Favicon from './assets/favicon.ico';
export default function Hero({ className = '' }: { className?: string }) {
  return (
    <div className={`mt-14 mb-12 flex flex-col `}>
      <div className="mb-10 flex items-center justify-center ">
        <p className="mr-2 text-4xl font-semibold">DocsGPT</p>
        <img src={Favicon} alt="Favicon" className="h-6 w-6" />
      </div>
      <p className="mb-3 text-center leading-6 text-black-1000">
        Welcome to your personal documentation assistant!
      </p>
      <p className="mb-3 text-center leading-6 text-black-1000">
        Enter a query related to the information in the documentation you
        selected to receive
        <br /> and we will provide you with the most relevant answers.
      </p>
      <p className="mb-3 text-center leading-6 text-black-1000">
        Start by entering your query in the input field below and we will do the
        rest!
      </p>
    </div>
  );
}
