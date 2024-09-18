export const SUB_TASKS_ADDABLE = 5;
export const MAIN_TASKS_ADDABLE = 5;

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

    slider: "hsl(328, 100%, 54%);",
    sliderActive: "hsl(328, 100%, 94%);",

    underlineColor: "hsl(328, 100%, 54%)",
};
export const STYLES = {
    boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    boxShadow2:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    boxShadow3: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
    boxShadow4: "4px 4px 13px 5px rgba(0,0,0,0.13)",
    toastBoxShadow:
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
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
    padding: "8px",
};
export const TASKS = {
    subjects: {
        0: { id: 0, task: "Astronomy", mainTaskIds: [0, 1, 2] },
        1: { id: 1, task: "Cooking", mainTaskIds: [3, 4] },
    },
    mainTasks: {
        0: { id: 0, task: "Learn about the Solar System", subTaskIds: [0, 1] },
        1: {
            id: 1,
            task: "Understand the concept of black holes",
            subTaskIds: [2],
        },
        2: {
            id: 2,
            task: "Explore exoplanets and their atmospheres",
            subTaskIds: [3, 4],
        },
        3: { id: 3, task: "Learn basic knife skills", subTaskIds: [5, 6] },
        4: {
            id: 4,
            task: "Master the art of pasta making",
            subTaskIds: [7, 8],
        },
   
    },
    subTasks: {
        0: { id: 0, task: "Identify planets and their characteristics" },
        1: { id: 1, task: "Understand planetary orbits" },
        2: { id: 2, task: "Study the event horizon theory" },
        3: { id: 3, task: "Research methods of detecting exoplanets" },
        4: { id: 4, task: "Analyze atmospheres of discovered exoplanets" },
        5: {
            id: 5,
            task: "Practice cutting vegetables with different knife techniques",
        },
        6: { id: 6, task: "Learn how to sharpen knives" },
        7: { id: 7, task: "Make fresh pasta dough" },
        8: { id: 8, task: "Experiment with different pasta shapes" },
    },
};
