const Entrylist = (props) => {
    const entries = props.entries;
    return (
        <div className="entrylist">
            {entries.map((entry) => (
                <div className="entry-preview" key={entry.id}>
                    <p className="p-title">{entry.title}</p>
                    <p className="p-date">{entry.date}</p>
                </div>
            ))}
        </div>
      );
}
 
export default Entrylist;