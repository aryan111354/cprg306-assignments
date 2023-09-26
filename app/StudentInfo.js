// StudentInfo.js

import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h3>Your Name: Aryan Patel</h3>
      <h4>Course Section: CPRG 306 C</h4>
      <p>
        GitHub Repository: 
        <Link href="https://github.com/yourusername/your-repo">Visit My GitHub</Link>
      </p>
    </div>
  );
};

export default StudentInfo;
