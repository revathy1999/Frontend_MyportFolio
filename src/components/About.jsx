import profile from "../assets/profile_edit.jpeg";
export default function About({ data }) {
  return (
    <>
      <div className="font-thin bg-[#171A42] text-white p-10">
        <h1 className="font-bold mb-5">About</h1>
        <div className="flex gap-20 justify-center items-center">
          <img
            src={profile}
            alt="Profile-photo"
            className="w-28 h-28 rounded-full object-cover"
          />
          <p>{data?.about}</p>
        </div>
      </div>
    </>
  );
}
