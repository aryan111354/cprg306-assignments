// /app/page.js

import Link from 'next/link';
import StudentInfo from './StudentInfo'; // Make sure StudentInfo.js is in the same folder as this file

const Page = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">Go to Week 2</Link>
      <Link href="/week3">Go to Week 3</Link>
    </div>
  );
};

export default Page;
