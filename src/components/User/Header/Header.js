import { useSelector } from 'react-redux';
import css from './Header.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import gooseUrl1x from 'images/desktopImages/header/header_desk@1x.png';
import gooseUrl2x from 'images/desktopImages/header/header_desk@2x.png';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';

export const Header = ({ toggleSidebar }) => {
  const namePage = useSelector(state => state.currentPage.namePage);

  return (
    <header className={css.header}>
      <section>
        <button
          type="button"
          className={css.burgerButton}
          aria-label="open close burger menu"
          onClick={toggleSidebar}
        >
          <RxHamburgerMenu className={css.burgerIcon} />
        </button>
        <h1 className={css.title}>{namePage}</h1>
        {namePage === 'Calendar' && (
          <div className={css.calendar}>
            <img
              srcSet={`${gooseUrl1x} 1x, ${gooseUrl2x} 2x`}
              alt="Goose"
              className={css.calendarGoose}
            />
            <div>
              <h1 className={css.title}>{namePage}</h1>
              <p className={css.textCalendarHeader}>
                <span className={css.textColor}>Let go</span> of the past and
                focus on the present!
              </p>
            </div>
          </div>
        )}
      </section>
      <section className={css.info}>
        <button type="button" className={css.feedbackButton}>
          Feedback
        </button>
        <ThemeToggler></ThemeToggler>
        <UserInfo></UserInfo>
      </section>
    </header>
  );
};
