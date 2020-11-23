export {redTheme} from "./themes/red-theme.treat";
export {default as ThemeProvider} from './themes/ThemeProvider'

import withRedTheme from "./themes/withRedTheme";
import ButtonComponent from "./Button/Button"
import LinkComponent from "./Link/Link"

export const Button = /*#__PURE__*/withRedTheme(ButtonComponent);
export const Link = /*#__PURE__*/withRedTheme(LinkComponent);
