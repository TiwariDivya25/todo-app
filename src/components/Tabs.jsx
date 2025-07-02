export function Tabs(props) {
    const { todos } = props;
    
    const tabs = ["all", "open", "completed"];

    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIdx) => {
                const numOfTasks = tab ==="all" ?
                    todos.length :
                    tab === "open" ?
                        todos.filter(val => !val.complete).length :
                            todos.filter(val => val.complete).length;



                return (
                    <button key={tabIdx} className="tab-button">
                        <h4>{tab} <span>({numOfTasks})
                            </span>
                        </h4>
                    </button>
                )
            })}

            
        </nav>
    );
}