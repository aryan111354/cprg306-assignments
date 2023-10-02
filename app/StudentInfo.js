// StudentInfo.js

import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h3>Your Name: Aryan Patel</h3>
      <h4>Course Section: CPRG 306 C</h4>
      <p>
        GitHub Repository: 
        <Link href="https://github.com/aryan111354/cprg306-assignments">Visit My GitHub</Link>
        <Link href="/week3">Week 3</Link>
      </p>
    </div>
  );
};

export default StudentInfo;
