export const SUB_TASKS_ADDABLE = 5
export const MAIN_TASKS_ADDABLE = 5

export const COLORS = {
    white: "hsl(0, 100%, 100%)",
    black: "hsl(0, 0%, 0%)",
    inactiveBlack: "hsl(0, 0%, 0%, 30%)",
    hoverBlack: "hsl(0, 0%, 0%, 20%)",

    background: "hsl(0, 0%, 90%, 80%)",
    backgroundHover: "hsl(0, 0%, 85%, 100%)",

    mainTaskBackground: "hsl(0, 0%, 0%, 25%)",
    taskFocusOutline: "hsl(0, 0%, 0%, 95%)",

    buttonPrimary: "hsl(0, 0%, 0%)",
    buttonPrimaryHover: "hsl(0, 0%, 0%, 80%)",
    buttonSecondary: "hsl(0,0%,80%, 100%)",
    buttonSecondaryHover: "hsl(0,0%,80%, 80%)",

    linkColor: "hsl(328, 100%, 54%)",
    overlay: "hsl(0, 0%, 0%, 0.03)",

    error: "hsl(343, 100%, 65%)",

};



export const WORK_TYPES = ["Ritual", "Deep Works", "Shallow Works"];

export const WORK_TYPES_STYLES = {
    fontSize: { active: "1.2rem", inactive: "1rem" },
    color: {
        active: COLORS.black,
        inactive: COLORS.inactiveBlack,
        hover: COLORS.hoverBlack,
    },
};

export const FEATURE_TITLES_STYLES = {
    fontSize: "1.2rem",
    padding: "8px"
}

export const STYLES = {
    boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    boxShadow2:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    boxShadow3: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
    boxShadow4: "4px 4px 13px 5px rgba(0,0,0,0.13)",
};

