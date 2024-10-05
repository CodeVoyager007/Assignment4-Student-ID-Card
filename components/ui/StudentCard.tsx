import React from 'react';

interface StudentCardProps {
  name: string;
  age: number;
  rollNumber: string;
  studentClass: string;
  shift: string;
  serialNumber: string;
  imageSrc: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ name, age, rollNumber, studentClass, shift, serialNumber, imageSrc }) => {
  return (
    <div className="bg-teal-800 border-white border-4 text-white w-full md:w-[500px] h-72 rounded-xl overflow-hidden shadow-lg m-2 transform transition-all hover:scale-105 hover:shadow-2xl relative"> 
      <div className="flex p-4 h-full">
        {/* Left section with image */}
        <div className="w-1/3 mr-2">
          <img className="w-full h-60 object-cover rounded-l-xl" src={imageSrc} alt={name} />
          <div className="text-center mt-1 text-white text-sm">Serial No: {serialNumber}</div>
        </div>
        {/* Right section with student info */}
        <div className="w-2/3 flex flex-col justify-between h-full mt-8">
          <ul className="text-white ml-3 text-lg">
            <div className="text-xl font-bold mb-1">{name}</div>
            <li><span className="font-semibold">⏱Age: </span>{age}</li>
            <li><span className="font-semibold">🗒Roll No: </span>{rollNumber}</li>
            <li><span className="font-semibold">🎓Class: </span>{studentClass}</li>
            <li><span className="font-semibold">🕞Shift: </span>{shift}</li>
          </ul>
        </div>
      </div>
      {/* Authorized Stamp section */}
      <div className="absolute bottom-2 right-2 text-center">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-sm">𝒢ℐ𝒜ℐ𝒞𝒬𝒰𝒜ℛ𝒯ℰℛ2</span>
          <div className="border-t-2 border-white w-32 mt-1" />
          <div className="text-xs font-semibold mt-1">Authorized Stamp</div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
