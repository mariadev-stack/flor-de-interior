import Link from "next/link";

const JournalPage = () => {
  return (
    <div>
      <h1>Journal Page</h1>
      <p>This is the journal page content.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}

export default JournalPage;