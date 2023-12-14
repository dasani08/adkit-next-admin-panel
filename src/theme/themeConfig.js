const light = {
  token: {
    fontSize: 14,
    colorPrimary: '#00B96B',
    borderRadius: 3,
    bgPricingColor: '#DFFEEA',
  },
  components: {
    Button: {
      algorithm: true,
      onlyIconSize: 14,
    },
    Layout: {
      headerBg: '#fff',
    },
    Table: {
      rowHoverBg: 'rgb(0 185 107 / 25%)',
      rowSelectedHoverBg: 'rgb(0 185 107 / 25%)',
      selectionColumnWidth: 46,
    },
  },
};

const dark = {
  token: {
    fontSize: 14,
    colorPrimary: '#00B96B',
    borderRadius: 3,
    colorText: 'rgba(255, 255, 255, 1)',
    colorTextQuaternary: 'rgba(255, 255, 255, 0.25)',
    colorTextSecondary: 'rgba(255, 255, 255, 0.85)',
    colorTextTertiary: 'rgba(255, 255, 255, 0.65)',
    colorTextDescription: 'rgba(255, 255, 255, 0.65)',
    colorTextPlaceholder: 'rgba(255, 255, 255, 0.25)',
    colorIcon: 'rgba(255, 255, 255, 0.65)',
    colorBgLayout: '#2b2b2b',
    colorBgContainer: '#1f1f1f',
    colorBorderSecondary: '#2b2b2b',
    colorBgElevated: '#2b2b2b',
    controlItemBgHover: '#454545',
    colorErrorBg: '#f34343',
    colorWarningBg: '#ffc323',
    colorInfoBg: '#3f98de',
    colorSuccessBg: '#00B96B',
    bgPricingColor: '#00804a',
  },
  components: {
    Button: {
      onlyIconSize: 14,
      defaultBg: '#2b2b2b',
      defaultColor: '#ffffff',
      textHoverBg: '#2b2b2b',
      primaryShadow: 'none',
      defaultShadow: 'none',
      ghostBg: 'transparent',
      defaultGhostColor: '#fff',
      defaultGhostBorderColor: '#fff',
    },
    Input: {
      activeShadow: '0 0 9px 0px rgba(0, 185, 107, 1)',
    },
    Layout: {
      bodyBg: '#2b2b2b',
      siderBg: '#121212',
      headerBg: '#121212',
      triggerBg: '#121212',
    },
    Menu: {
      darkItemBg: '#121212',
      darkItemHoverBg: '#2b2b2b',
      darkSubMenuItemBg: '#1f1f1f',
    },
    Table: {
      rowHoverBg: 'rgb(0 185 107 / 25%)',
      rowSelectedBg: '#2b2b2b',
      rowSelectedHoverBg: 'rgb(0 185 107 / 25%)',
      footerBg: '#2b2b2b',
      selectionColumnWidth: 46,
    },
    Select: {
      optionSelectedBg: '#00B96B',
    },
  },
};

const theme = { light, dark };

export default theme;
