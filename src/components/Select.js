import React from 'react';
import ReactSelect from '@atlaskit/select';
import { useTheme } from 'emotion-theming';

const Select = props => {
  const theme = useTheme();

  return (
    <ReactSelect
      styles={{
        control: styles => ({
          ...styles,
          backgroundColor: theme.select.bg,
          borderColor: 'transparent',
          ':hover': {
            ...styles[':hover'],
            backgroundColor: theme.select.bgHover,
            borderColor: 'transparent',
          },
        }),
        singleValue: styles => ({
          ...styles,
          color: theme.select.text,
        }),
        dropdownIndicator: styles => ({
          ...styles,
          color: theme.select.indicator,
          ':hover': {
            ...styles[':hover'],
            color: theme.select.indicatorHover,
          },
        }),
        input: styles => ({
          ...styles,
          color: theme.select.text,
        }),
        menu: styles => ({
          ...styles,
          backgroundColor: theme.select.menu,
        }),
        option: (styles, { isFocused, isSelected }) => ({
          ...styles,
          color: theme.select.text,
          cursor: 'pointer',
          backgroundColor: isSelected
            ? theme.select.menuSelected
            : isFocused
            ? theme.select.menuFocus
            : null,
          ':active': {
            ...styles[':active'],
            backgroundColor: isSelected
              ? theme.select.menuSelected
              : theme.select.menuFocus,
          },
        }),
      }}
      {...props}
    />
  );
};

export default Select;
