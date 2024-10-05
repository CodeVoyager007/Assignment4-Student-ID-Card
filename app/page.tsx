import React from 'react';
import StudentCard from '@/components/ui/StudentCard';

const App: React.FC = () => {
  const students = [
    {
      name: 'Ayesha Mughal',
      age: 15,
      rollNumber: 'CS101',
      studentClass: 'Monday',
      shift: '2:00pm-5:00pm',
      serialNumber: '001',
      imageSrc: 'https://shorturl.at/UZZpj'
    },
    {
      name: 'Eman Zai',
      age: 16,
      rollNumber: 'CS102',
      studentClass: 'Monday',
      shift: '2:00pm-5:00pm',
      serialNumber: '002',
      imageSrc: 'https://shorturl.at/jkwm2'
    },
    {
      name: 'Maryam Khan',
      age: 15,
      rollNumber: 'CS103',
      studentClass: 'Monday',
      shift: '2:00pm-5:00pm',
      serialNumber: '003',
      imageSrc: 'https://shorturl.at/iCNfI'
    }
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-white text-5xl font-bold mb-4 underline underline-double">
        𝙎𝙩𝙪𝙙𝙚𝙣𝙩 𝙄𝘿 𝘾𝙖𝙧𝙙
      </h1>

      {/* Flexbox layout for the first two cards */}
      <div className="flex justify-center space-x-8 mb-8 flex-wrap">
        {students.slice(0, 2).map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            rollNumber={student.rollNumber}
            studentClass={student.studentClass}
            shift={student.shift}
            serialNumber={student.serialNumber}
            imageSrc={student.imageSrc}
          />
        ))}
      </div>

      {/* Center the third card below */}
      <div className="flex justify-center">
        <StudentCard
          name={students[2].name}
          age={students[2].age}
          rollNumber={students[2].rollNumber}
          studentClass={students[2].studentClass}
          shift={students[2].shift}
          serialNumber={students[2].serialNumber}
          imageSrc={students[2].imageSrc}
        />
      </div>
    </div>
  );
};

export default App;
