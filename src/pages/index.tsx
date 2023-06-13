import { useState } from 'react';
import CompanyLanding from './CompanyLanding';
import SwitchNavbar from './SwitchNavbar';
import StudentLanding from './StudentLanding';

export default function Home() {
  const [version, setVersion] = useState('student');

  return (
    <>
      <SwitchNavbar setVersion={setVersion} version={version} />
      {version === 'student' && <StudentLanding />}
      {version === 'company' && <CompanyLanding />}
    </>
  );
}
