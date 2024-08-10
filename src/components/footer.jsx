import React from 'react';

export default function Footer() {
  return (
    <footer
      className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left mt-5">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2024 Copyright: 
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href=""
        > Wabisabi Project</a>
      </div>
    </footer>
  );
}