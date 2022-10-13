export const ContactsList = ({ names, onChange }) => {
  return (
    <>
      <label>
        Find contacts by name
        <br />
        <input type="text" name="filter" onChange={onChange} />
      </label>

      <ul>
        {names.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}, tel: {number}
            </li>
          );
        })}
      </ul>
    </>
  );
};
