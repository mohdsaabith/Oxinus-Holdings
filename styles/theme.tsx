import { Colors } from "./colors";

const muiTheme = {
  palette: {
    primary: {
      main: "#ECF9F9",
    },
    // inherit: {
    //   main: Colors.inherit,
    // },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: {
          ".MuiPaper-root": {
            background: "#ECF9F9",
            borderColor: "#FFFFF",

            ".MuiListItemText-root": {
              color: "#ECF9F9",
              ".MuiTypography-root ": {
                fontWeight: 400,
                color: "#A0A9AF",
              },
            },

            ".MuiListItemIcon-root, .MuiSvgIcon-root": {
              color: "#A0A9AF",
            },
            ".MuiListItemIcon-root": {
              minWidth: 20,
            },
            ".Mui-selected": {
              backgroundColor: "#ECF9F9",
              marginLeft: 16,
              marginRight: 16,
              borderRadius: 4,

              ".MuiTypography-root": {
                color: Colors.white,
              },
              ".MuiListItemIcon-root, .MuiSvgIcon-root": {
                color: Colors.white,
              },
            },
          },
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          color: Colors.primaryLight,

          ".MuiTypography-root": {
            fontWeight: 600,
            fontSize: "16px",
          },
          ".Mui-selected": {
            ".MuiSvgIcon-root": {
              color: Colors.primary,
            },
            ".MuiListItemText-root ": {
              color: Colors.primary,
            },
            ".MuiTypography-root": {
              color: Colors.primary,
            },
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          ".MuiTableCell-stickyHeader": {
            backgroundColor: "#b6dcff",
          },
          ".MuiTableCell-head": {
            color: Colors.primary,
            fontWeight: "bold",
            fontSize: 15,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#EBEBEB",
            borderRadius: "8px",
          },
          "&.Mui-focused fieldset": {
            borderColor: "Colors.primary",
          },
        },
      },
    },

    MuiTableBody: {
      styleOverrides: {
        root: {
          ".MuiTableCell-body": {
            cursor: "pointer",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            // Replace this with your desired hover color
          },
          "&.Mui-selected": {
            "&:hover": {
              backgroundColor: Colors.primary, // Replace 'your-selected-hover-color' with the desired color for selected hover state
            },
          },
        },
      },
    },
  },
};
export default muiTheme;
