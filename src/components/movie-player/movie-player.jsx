import {useRef} from 'react';

const MoviePlayer = (props) => {
  const {previewMp4, previewWebm, poster} = props.movie;
  const videoRef = useRef(null);

  const onMouseEnter = () => setTimeout(() => videoRef.current.play(), 1000);
  const onMouseLeave = () => setTimeout(() => videoRef.current.load(), 1000);

  return (
    <video
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={videoRef}
      width="280"
      height="175"
      poster={poster}
      controls
    >
      <source src={previewWebm} type="video/webm" />
      <source src={previewMp4} type="video/mp4" />
    </video>
  );
};

MoviePlayer.propTypes = {
  movie: propTypes.shape({
    name: propTypes.string,
    genre: propTypes.string,
    releaseDate: propTypes.string,
    promo: propTypes.string,
    poster: propTypes.string,
    previewMp4: propTypes.string,
    previewWebm: propTypes.string,
  }).isRequired,
};

export default MoviePlayer;


// Вся информация о фильме представлена на трех 
// вкладках: «Overview», «Details» и «Reviews».
// Пока мы заполнили только одну — «Overview» 
// и сегодня нам предстоит заполнить остальные. Перед тем как это сделать, нам потребуется создать отдельный компонент для организации вкладок (табов).

// В директории src/components создайте новый компонент «Табы». Компонент должен отрисовывать три таба: Overview, Details и Reviews. При клике на таб отображается релевантный набор информации. Разметка для компонента доступна в файле movie-page-details.html (смотрите .movie-nav__list). Посмотреть примеры оформления табов вы можете на страницах:
// Overview — movie-page.html
// Details — movie-page-details.html
// Reviews — movie-page-reviews.html
// Все необходимые данные для заполнения компонент получает через props.

// Откройте компонент страницы «Детальная информация о фильме». Подключите к странице компонент «Табы». Удалите из метода render статичную разметку табов и вместо неё воспользуйтесь компонентом, созданным в предыдущем шаге. Передайте компоненту все необходимые данные для заполнения вкладок.

// В конце страницы «Детальная информация о фильме» отображается блок «More like this» с информацией о похожих фильмах. Этот компонент похож на список в котором отображаются карточки фильмов на главной странице. Попробуйте либо адаптировать компонент «Список фильмов» (тот что используется на главной), либо создать новый, который будет выводить карточки четырёх похожих фильмов. Похожие фильмы определяются по жанру.

// Не забудьте протестировать созданные компоненты, а также провалидировать все props.
