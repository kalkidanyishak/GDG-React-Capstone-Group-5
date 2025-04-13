import { useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function SelectInput() {
  const [location, setLocation] = useState("Location");
  const [people, setPeople] = useState("People");
  const [selectedDate, setSelectedDate] = useState("");
  const dateInputRef = useRef(null);

  const handleContainerClick = () => {
    dateInputRef.current.showPicker();
  };

  const locations = [
    "Indonesia",
    "France",
    "Japan",
    "USA",
    "Italy",
    "Thailand",
    "Egypt",
  ];

  return (
    <div className="flex flex-row space-x-2">
      {/* Location Select */}
      <div className="relative flex-1">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="text-[10px] md:text-lg appearance-none w-full md:px-4 py-3 pr-8 border-none rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Location" disabled>
            Location
          </option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        <FaAngleDown className="absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>

      <div
        className="relative flex items-center px-2 md:px-8 py-3 bg-white border-none rounded-md cursor-pointer"
        onClick={handleContainerClick}
      >
        {/* Label or selected date */}
        <span className="flex-1 text-[10px] md:text-lg text-gray-700">
          {selectedDate ? new Date(selectedDate).toLocaleDateString() : "Date"}
        </span>

        {/* Hidden date input */}
        <input
          type="date"
          ref={dateInputRef}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        {/* Dropdown icon */}
        <FaAngleDown className="text-gray-500" />
      </div>

      {/* People Select */}
      <div className="relative flex-1">
        <select
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="text-[10px] md:text-lg appearance-none w-full md:px-4 md:pr-8 py-3 border-none rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="People" disabled>
            People
          </option>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? "Person" : "People"}
            </option>
          ))}
        </select>
        <FaAngleDown className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}
export default SelectInput;
