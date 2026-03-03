export default function Header({ data }) {
  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="flex flex-col gap-3 justify-center items-center bg-gradient-to-r from-indigo-900 via-indigo-700 to-blue-500
 text-white font-thin"
      >
        <h1 className="text-2xl font-bold mt-5">{data?.name}</h1>
        <p className="">{data?.designation}</p>
        <div className="flex gap-5 mb-5">
          <a
            href="/Revathi-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1044e0] p-3 rounded"
          >
            Download Resume
          </a>
          <button
            className="bg-[#1044e0] p-3 rounded"
            onClick={handleContactClick}
          >
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
}
