<template>
  <div class="wrapper_main container">
    <Navigation></Navigation>
    <div class="page">
      <div id="block-help-nav" class="block">
        <div class="block-title">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-8">
                <div class="block-title-slot">
                  <ul class="navbar nav helppage_subnav">
                    <li class="nav-item">
                      <button>Подключение к пулу</button>
                    </li>
                    <li class="nav_item">
                      <button class="active">НАчало работы</button>
                    </li>
                    <li class="nav_item">
                      <button>ЧЗВ</button>
                    </li>
                    <li class="nav_item">
                      <button>API документация</button>
                    </li>
                    <li class="nav_item">
                      <button>Поддержка</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4">
                <div class="block-title-slot">
                  
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="sub-pages">
        <div   class="block sub_page" data-id="1">
          <div class="row">
            <div class="col-md-6">
              <div class="plate">
                <div class="plate_title">
                  <h3>Создание аккаунта</h3>
                </div>
                <div class="plate_body">
                  <p class="help_text">
                    Зарегистрируйте аккаунт, чтобы получить доступ к личному кабинету, где у вас будет возможность смотреть статистику по майнерам, баланс и получать выплаты.
                  </p>
                </div>
                <div class="plate_title">
                  <h3>Подключение майнеров</h3>
                </div>
                <div class="plate_body">
                  <p class="help_text">
                    В данный момент пул поддерживает майнинг только с использованием ASICs.
                    Для подключения майнеров необходимо зайти в веб-интерфейс для управления майнером, перейти во вкладку Miner Configuration и добавить адреса нашего пула.
                  </p>
                </div>
                <div class="plate_title">
                  <h3>Мониторинг</h3>
                </div>
                <div class="plate_body">
                  <p class="help_text">
                    После начала майнинга на нашем пуле через 2-5 минут вы можете зайти в личный кабинет и наблюдать за графиком хешрейта, среднего хешрейта, кол-ва шар, видеть хешрейт в реальном времени и средний за 24 часа, а также ориентировочный прогноз дохода от майнинга с учетом вашей мощности.
                    <br />
                    В разделе Workers можно удобно просматривать детальную информацию по каждому воркеру, а на странице Payments видеть всю историю выплат и текущий баланс.
                    <br />
                    В настройках можно установить кошелек для выплат, сменить пароль и выставить настройку приватности для скрытия имени пользователя из публичного списка майнеров.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="plate">
                <div class="plate_title filled">
                  <h3>Основной пул</h3>
                </div>
                <div class="plate_body">
                  <p class="help_text">
                  </p>
                </div>
                <div class="plate_title filled">
                  <h3>Backup-пул</h3>
                </div>
                <div class="plate_body">
                  <p class="help_text">
                    Желательно установить для того, чтобы в случае потери связи с основным пулом майнер автоматически переключился на Backup пул - в результате ни одна шара не потеряется. После возобновления работы основного пула, майнер сразу переключится на него.
                  </p>
                  <p class="help_text">
                    В качестве username используйте то имя пользователя, которое указали при регистрации. Регистр не важен.
                  </p>
                  <p class="help_text">
                    В качестве workername можете выбрать любое подходящее вам название, однако оно не должно содержать знаков, за исключением нижнего подчеркивания _.
                  </p>
                  <p class="help_text">
                    Вы можете указывать одинаковый workername для нескольких майнеров, либо не указывать его совсем. В таком случае имя воркера сгенерируется автоматически, а параметр worker в настройках пула будет содержать только имя пользователя.
                  </p>
                  <p class="help_text">
                    Пример параметра без указания workername: “username”.
                  </p>
                  </p>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
      
      </div>
    </div>
</template>

<script>

  import Navigation from '~/components/web_components/header_components/Navigation.vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  export default {
  components: {   Navigation , FontAwesomeIcon },
  data:()=>{
    return{ 
      activePage: 1
    }
  }, 
  methods:{
      setActiveSubPage: (e)=>{
            let activePage = e.currentTarget.dataset.id;
      }
    } 
  }
</script>
