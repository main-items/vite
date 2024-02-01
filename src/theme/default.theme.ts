const unifiedStyle = {
  height: '32px',
  heightMedium: '32px',
}

const selectedColor = '#0678ff'
const placeholderColor = '#B7C6DA'
const boxShadowColor = 'color-mix(in srgb, rgba(87, 92, 208, 1) 35%, #FFFFFF)'

export const common = {
  selectedColor,
  bodyColor: 'rgb(245, 247, 250)',
  areaColor: 'rgba(255,255,255, 1)',
  minorAreaColor: `color-mix(in srgb, ${selectedColor} 18%, #FFFFFF)`,
  nextAreaColor: `color-mix(in srgb, rgb(183, 198, 218) 72%, #FFFFFF)`,
  color: `color-mix(in srgb, ${selectedColor} 100%, #FFFFFF)`,
  colorIncluded: `color-mix(in srgb, ${selectedColor} 10%, #FFFFFF)`,
  hoverColor: `color-mix(in srgb, ${selectedColor} 75%, #FFFFFF)`,
  pressedColor: `color-mix(in srgb, ${selectedColor} 70%, #FFFFFF)`,
  focusColor: `color-mix(in srgb, ${selectedColor} 85%, #FFFFFF)`,
  activeColor: `color-mix(in srgb, ${selectedColor} 90%, #FFFFFF)`,
  loadingColor: `color-mix(in srgb, ${selectedColor} 100%, #FFFFFF)`,
  boxShadowColor,
  boxShadowFocusColor: `color-mix(in srgb, ${selectedColor} 20%, #FFFFFF)`,
  defaultTextColor: `color-mix(in srgb, rgb(22,38,56) 85%, #FFFFFF)`,
  minorTextColor: `color-mix(in srgb, rgb(22,38,56) 60%, #FFFFFF)`,
  clickTextColor: `color-mix(in srgb, ${selectedColor} 100%, #FFFFFF)`,
  textHoverSize: `scale(1.1)`,
  textHoverColor: `color-mix(in srgb, ${selectedColor} 100%, #FFFFFF)`,
  textActiveColor: `color-mix(in srgb, ${selectedColor} 90%, #FFFFFF)`,
  textFocusColor: `color-mix(in srgb, ${selectedColor} 85%, #FFFFFF)`,
  textPressedColor: `color-mix(in srgb, ${selectedColor} 70%, #FFFFFF)`,
  optionTextColor: 'rgba(255,255,255, 1)',
}

const themeOverrides: any = {
  common,
  Input: {
    ...unifiedStyle,
    borderFocus: `1px solid ${common.hoverColor}`,
    borderHover: `1px solid ${common.focusColor}`,
    boxShadowFocus: `0 0 0 2px ${common.boxShadowFocusColor}`,
    caretColor: common.pressedColor,
    color: 'rgba(255, 255, 255, 0)',
    colorFocus: 'rgba(255, 255, 255, 0)',
    suffixTextColor: 'rgba(194, 194, 194, 1)',
    placeholderColor,
  },
  Spin: {
    color: common.textHoverColor,
    textColor: common.textHoverColor
  },
  Button: {
    ...unifiedStyle,
    color: common.optionTextColor,
    colorHover: common.optionTextColor,
    colorPressed: common.optionTextColor,
    colorFocus: common.optionTextColor,
    colorInfo: common.clickTextColor,
    rippleColor: common.pressedColor,
    textColor: common.defaultTextColor,
    textColorHover: common.textHoverColor,
    textColorGhostHover: common.textHoverColor,
    borderHover: common.hoverColor,
    borderPressed: common.pressedColor,
    borderFocus: common.focusColor,
    colorSuccess: common.clickTextColor,
    textColorTextSuccess: common.clickTextColor,
    textColorGhostSuccess: common.clickTextColor,
    rippleColorSuccess: common.clickTextColor,
    textColorPressed: common.textPressedColor,
    textColorFocus: common.textFocusColor,
    textColorTextHover: common.textHoverColor,
  },
  Table: {
    thPaddingMedium: '8.5px 16px',
    thPaddingLarge: '8.5px 16px',
    tdPaddingMedium: '8.5px 16px',
    tdPaddingLarge: '8.5px 16px',
    loadingColor: common.loadingColor,
  },
  DataTable: {
    thColor: '#f5f7fa',
    loadingColor: common.loadingColor,
    loadingSize: '36px',
    thPaddingMedium: '8.5px 16px',
    thPaddingLarge: '8.5px 16px',
    tdPaddingMedium: '8.5px 16px',
    tdPaddingLarge: '8.5px 16px',
    thIconColorActive: common.textActiveColor,
  },
  DatePicker: {
    itemColorIncluded: common.colorIncluded,
    itemColorActive: common.textActiveColor,
  },
  Pagination: {
    itemTextColorHover: common.textHoverColor,
    itemTextColorPressed: common.textPressedColor,
    itemTextColorActive: common.optionTextColor,
    itemColor: 'rgba(6, 120, 255, 0)',
    itemColorHover: 'rgba(6, 120, 255, 0)',
    itemColorPressed: 'rgba(6, 120, 255, 0)',
    itemColorActive: common.textActiveColor,
    itemColorActiveHover: common.textHoverColor,
    itemBorder: '1px solid rgba(6, 120, 255, 0)',
    itemBorderHover: '1px solid rgba(6, 120, 255, 0)',
    itemBorderPressed: `1px solid ${common.textPressedColor}`,
    itemBorderActive: `1px solid ${common.textActiveColor}`,
  },
  Card: {
    paddingMedium: '11.5px 24px',
    titleFontSizeMedium: '16px',
  },
  Select: {
    ...unifiedStyle,
    loadingColor: common.loadingColor,
  },
  Popover: {
    padding: '12px 16px',
    color: 'rgba(255, 255, 255, 1)',
    textColor: 'rgba(22, 38, 56, 0.65)',
  },
  Radio: {
    boxShadowActive: `inset 0 0 0 5px ${common.activeColor}`,
    boxShadowFocus: `inset 0 0 0 5px ${common.color}, 0 0 0 2px ${common.boxShadowFocusColor}`,
    boxShadowHover: `inset 0 0 0 5px ${common.hoverColor}`,
    dotColorActive: '#fff',
  },
  Checkbox: {
    borderChecked: `1px solid ${common.color}`,
    borderFocus: `1px solid ${common.textFocusColor}`,
    colorChecked: common.clickTextColor,
    boxShadowFocus: `0 0 0 2px ${common.boxShadowFocusColor}`,

    fontSizeSmall: '12px',
    sizeSmall: '12px',
  },
  Upload: {
    draggerBorderHover: `1px dashed ${common.hoverColor}`,
    itemTextColorSuccess: common.color,
  },
  Tree: {
    nodeColorActive: common.activeColor,
    nodeColorHover: '#F5F7FA',
  },
  Layout: {
    color: 'rgba(255, 255, 255, 0)',
  },
  Slider: {
    // dotColor: 'rgba(255, 255, 255, 0)',
    // handleColor: 'rgba(255, 255, 255, 0)',
    // dotColorModal: 'rgba(255, 255, 255, 0)',
    // dotColorPopover: 'rgba(255, 255, 255, 0)',
    // indicatorTextColor: 'rgba(255, 255, 255, 0)',
  },
  Menu: {
    itemHeight: '40px',
    borderRadius: '12px',

    itemColorActive: common.activeColor,
    itemColorActiveCollapsed: common.color,
    itemColorHover: common.hoverColor,
    itemColorActiveHover: common.activeColor,

    itemIconColorChildActive: common.activeColor,
    itemIconColorChildActiveHover: common.optionTextColor,

    arrowColorHover: common.optionTextColor,
    arrowColorChildActive: common.activeColor,
    arrowColorChildActiveHover: common.optionTextColor,

    itemIconColorHover: common.optionTextColor,
    itemIconColorActive: common.optionTextColor,
    itemIconColorActiveHover: common.optionTextColor,

    itemTextColorHover: common.optionTextColor,
    itemTextColorActive: common.optionTextColor,
    itemTextColorActiveHover: common.optionTextColor,
    itemTextColorChildActive: common.activeColor,
    itemTextColorChildActiveHover: common.optionTextColor,

  },
  Drawer: {
    titleFontSize: '16px',
    headerPadding: '14.5px 24px',
    footerBorderTop: '0px solid rgba(239, 239, 245, 0)',
  },
  Tabs: {
    panePaddingMedium: '16px 0px',
    tabGapSmallBar: '24px',
    tabGapMediumBar: '24px',
    tabGapLargeBar: '24px',
    tabGapSmallLine: '24px',
    tabGapMediumLine: '24px',
    tabGapLargeLine: '24px',
    barColor: common.color,
    tabTextColorActiveLine: common.textActiveColor,
    tabTextColorHoverBar: common.textHoverColor,
    tabTextColorActiveCard: common.textActiveColor,
    tabTextColorHoverLine: common.textHoverColor,
    tabTextColorActiveBar: common.textActiveColor,
  },
  Tag: {
    heightMedium: '24px',
    heightSmall: '20px'
  },
  Form: {
    blankHeightMedium: '32px',
    feedbackHeightSmall: '20px',
    feedbackHeightMedium: '20px',
    labelPaddingHorizontal: '0 0 0 0'
  },
  Transfer: {
    headerHeightSmall: '38px',
    headerHeightMedium: '38px',
  },
  Dropdown: {
    optionTextColorActive: common.optionTextColor,
    optionTextColorHover: common.optionTextColor,
    optionTextColorActiveHover: common.optionTextColor,

    optionTextColorChildActive: common.optionTextColor,
    optionTextColorChildHover: common.optionTextColor,

    optionColorActive: common.activeColor,
    optionColorChildActive: common.activeColor,
    optionColorHover: common.hoverColor,
    optionColorActiveHover: common.activeColor,
  },
}

export default themeOverrides
