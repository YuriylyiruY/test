<?php

$timer = get_post_meta(310, 'timer', true);

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Junior Specialist Corporation</title>

  <?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

  <header class="main-header">

    <?php if ($timer == 1) : ?>
    <div class="top-bar">
      <div class="container">
        <div class="campaign">
          <p class="campaign__text">Получи до 10.000.000 рублей<br>на разработку своего MVP</p>
          <a class="btn  btn--accent  btn--small  campaign__btn" href="#">Подробнее</a>
        </div>
        <?php get_template_part('includes/block', 'timer'); ?>
      </div>
    </div>
    <?php endif; ?>

    <div class="top-header top-header--socrat">
      <div class="container">
        <div class="logo">
          <a class="logo__link" href="/">
            <div class="logo__svg-container">
              <svg>
                <use xlink:href="<?php echo get_template_directory_uri(); ?>/images/svg/sprite.svg#logo"></use>
              </svg>
            </div>
            <span>Junior<br>Specialists<br>Corporation</span>
          </a>
        </div>
        <nav class="main-nav">
          <div class="toggler">
            <span></span>
          </div>

          <div class="main-nav-wrapper">
            <?php wp_nav_menu(
                        array(
                            'theme_location' => 'socrat-menu',
                            'menu_class' => 'main-nav-socrat'
                        )
                    ); ?>
        </nav>
        <a href="https://onlinetestpad.com/hoi7tdqdxlyha" class="btn-socrat" target="_blank">Принять участие</a>

      </div>
    </div>
  </header>