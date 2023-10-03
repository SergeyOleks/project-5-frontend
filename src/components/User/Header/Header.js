import { useSelector } from 'react-redux';
import css from './Header.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import gooseUrl1x from 'images/desktopImages/header/header_desk@1x.png';
import gooseUrl2x from 'images/desktopImages/header/header_desk@2x.png';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

export const Header = () => {
  const namePage = useSelector(state => state.currentPage.namePage);

  return (
    <header>
      <button
        type="button"
        className={css.burgerButton}
        aria-label="open close burger menu"
      >
        <RxHamburgerMenu className={css.burgerIcon} />
      </button>
      <section>
        {<h1 className={css.title}>{namePage}</h1>}
        {namePage === 'Calendar' && (
          <div className={css.calendar}>
            <img
              srcSet={`${gooseUrl1x} 1x, ${gooseUrl2x} 2x`}
              alt="Goose"
              className={css.calendarGoose}
            />
            <p>Let go of the past and focus on the present!</p>
          </div>
        )}
      </section>
      <section>
        <ThemeToggler></ThemeToggler>
      </section>
    </header>
  );
};
