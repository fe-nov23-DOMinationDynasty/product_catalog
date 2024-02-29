// import React, { useState } from 'react';
// import './SearchInput.scss';
// import { SearchOption } from '../../types/SearchOption';

// interface Props {
//   onChange: (query: string) => void,
//   foundOptions: SearchOption[] | null
// }

// export const SearchInput: React.FC<Props> = ({ onChange, foundOptions }) => {
//   const [query, setQuery] = useState('');

//   const handleQueryChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const normalizedQuery = event.target.value.toLowerCase().trim();

//     onChange(normalizedQuery);

//     setQuery(event.target.value);
//   };

//   return (
//     <div className="search-input">
//       <input
//         className='search-input__input'
//         value={query}
//         onChange={handleQueryChanged}
//         placeholder="Looking for something?"
//         type="search"
//       />

//       <div className="search-input__found-options">
//         {foundOptions?.map(option => (
//           <div className="search-input__found-option">
//             <img
//               className='search-input__option-image'
//               src={option.image}
//               alt={`${option.name}_image`}
//             />
//             <p className='search-input__option-name'>
//               {option.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
