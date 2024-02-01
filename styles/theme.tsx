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
              color: "#12112C",
              ".MuiTypography-root ": {
                fontWeight: 400,
                color: "#12112C",
              },
            },

            ".MuiListItemIcon-root, .MuiSvgIcon-root": {
              color: "#12112C",
            },
            ".MuiListItemIcon-root": {
              minWidth: 20,
            },
            ".Mui-selected": {
              backgroundColor: "#12B2B3",
              color: "#FFFFFF",
              marginLeft: 16,
              marginRight: 16,
              borderRadius: 4,

              ".MuiTypography-root": {
                color: "#FFFFFF",
              },
              ".MuiListItemIcon-root, .MuiSvgIcon-root": {
                color: "#FFFFFF",
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
              color: "#FFFFFF",
            },
            ".MuiListItemText-root ": {
              color: "#FFFFFF",
            },
            ".MuiTypography-root": {
              color: "#FFFFFF",
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
