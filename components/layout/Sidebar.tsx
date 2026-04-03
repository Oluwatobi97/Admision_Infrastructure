const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-5">
      <h2 className="text-xl text-gray-950 font-bold mb-10">Admin</h2>

      <ul className="space-y-4">
        <li className="text-gray-700 text-md font-semibold hover:text-red-500 cursor-pointer">
          Dashboard
        </li>
        <li className="text-gray-700 text-md font-semibold hover:text-red-500 cursor-pointer">
          Students
        </li>
        <li className="text-gray-700 text-md font-semibold hover:text-red-500 cursor-pointer">
          Exams
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
