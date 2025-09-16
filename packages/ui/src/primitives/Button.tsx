import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<Props> = ({ variant = 'primary', style, ...rest }) => {
  const base: React.CSSProperties = {
    padding: '8px 14px',
    borderRadius: 8,
    border: '1px solid',
    cursor: 'pointer',
  };
  const theme: Record<string, React.CSSProperties> = {
    primary: { background: '#0e7afe', color: 'white', borderColor: '#0e7afe' },
    secondary: { background: 'transparent', color: '#0e7afe', borderColor: '#0e7afe' },
  };
  return <button style={{ ...base, ...theme[variant], ...style }} {...rest} />;
};

