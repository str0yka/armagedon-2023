import s from './Footer.module.css';

interface FooterProps extends React.ComponentProps<'footer'> {}

export function Footer(props: FooterProps) {
  return (
    <footer
      {...props}
      className={s.footer}
    >
      <p>© Все права и планета защищены</p>
    </footer>
  );
}
