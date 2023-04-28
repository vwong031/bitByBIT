import Image from "next/image";
import { HiPencil } from "react-icons/hi";
import UserContext from "@/components/UserContext";
import { useContext, useState } from "react";

const Profile = ({ src, fullName, userName, joinDate }) => {
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState("");

  const updateContext = (tempUser) => {
    setUser({ ...user, username: tempUser });
    setIsEditing(false);
  };

  const updateProfileComponent = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
    setTempUser("");
  };

  return (
    <div className="w-96 p-7 bg-code-darkpurple text-code-white rounded-3xl">
      <div className="flex justify-between items-start pb-2.5">
        <div className="w-48 h-48 mb-2 bg-gray-300 rounded-2xl relative">
          <Image
            src={src}
            className="rounded-2xl"
            alt={fullName + "'s profile picture"}
            fill
            unoptimized={true}
          />
        </div>
        <button onClick={(e) => updateProfileComponent()}>
          <HiPencil className="text-4xl" />
        </button>
      </div>
      {!isEditing ? (
        <div className="text-3xl font-semibold">{userName}</div>
      ) : (
        <div className="grid w-80 gap-1">
          Change username
          <input
            className="text-lg rounded w-80 h-9 text-code-black pl-2"
            placeholder="Input your new username here..."
            value={tempUser}
            onChange={(e) => setTempUser(e.target.value)}
          />
          <button
            className="justify-self-end rounded-full h-7 w-24 bg-code-lime text-code-black font-bold"
            onClick={() => {
              updateContext(tempUser);
            }}
          >
            Save
          </button>
        </div>
      )}
      <div className="text-xl font-normal">{fullName}</div>
      <div className="h-0.5 w-full bg-white rounded-sm my-4" />
      <div className="text-sm font-light mt-4">member since {joinDate}</div>
    </div>
  );
};

export default Profile;
