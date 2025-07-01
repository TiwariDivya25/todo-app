export function Tabs() {
    const tabs = ["all", "open", "completed"];
    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIdx) => {
                return (
                    <button key={tabIdx} className="tab-button">
                        <h4>{tab} <span>(0)
                            </span>
                        </h4>
                    </button>
                )
            })}

            
        </nav>
    );
}