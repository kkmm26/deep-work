export const COLORS = {
    white: "hsl(0, 100%, 100%)",
    black: "hsl(0, 0%, 0%)",
    inactiveBlack: "hsl(0, 0%, 0%, 30%)",
    hoverBlack: "hsl(0, 0%, 0%, 20%)",

    plusButton: "hsl(0, 0%, 90%, 80%)",
    plusButtonHover: "hsl(0, 0%, 85%, 100%)",
};

export const WORK_TYPES = ["Ritual", "Deep Works", "Shallow Works"];

export const WORK_TYPES_STYLES = {
    fontSize: { active: 20, inactive: 14 },
    color: {
        active: COLORS.black,
        inactive: COLORS.inactiveBlack,
        hover: COLORS.hoverBlack,
    },
};

export const STYLES = {
    boxShadow: "rgba(0, 0, 0, 0.375) 0px 2px 8px 0px"
}