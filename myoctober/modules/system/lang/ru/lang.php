<?php

return [
    'app' => [
        'name' => 'October CMS',
        'tagline' => 'Возвращение к истокам'
    ],
    'locale' => [
        'cs' => 'Czech',
        'en' => 'English',
        'de' => 'German',
        'es' => 'Spanish',
        'es-ar' => 'Spanish (Argentina)',
        'fa' => 'Persian',
        'fr' => 'French',
        'hu' => 'Hungarian',
        'id' => 'Bahasa Indonesia',
        'it' => 'Italian',
        'ja' => 'Japanese',
        'lv' => 'Latvian',
        'nb-no' => 'Norwegian (Bokmål)',
        'nl' => 'Dutch',
        'pl' => 'Polish',
        'pt-br' => 'Portuguese (Brazil)',
        'ro' => 'Romanian',
        'ru' => 'Russian',
        'sv' => 'Swedish',
        'sk' => 'Slovak (Slovakia)',
        'tr' => 'Turkish',
        'zh-cn' => 'Chinese (China)',
        'zh-tw' => 'Chinese (Taiwan)',
    ],
    'directory' => [
        'create_fail' => 'Невозможно создать директорию: :name'
    ],
    'file' => [
        'create_fail' => 'Невозможно создать файл: :name'
    ],
    'combiner' => [
        'not_found' => "Сборщик ресурсов не может найти файл ':name'."
    ],
    'system' => [
        'name' => 'Система',
        'menu_label' => 'Система',
        'categories' => [
            'cms' => 'CMS',
            'misc' => 'Разное',
            'logs' => 'Логи',
            'mail' => 'Почта',
            'shop' => 'Магазин',
            'team' => 'Команда',
            'users' => 'Пользователи',
            'system' => 'Система',
            'social' => 'Социальное',
            'events' => 'События',
            'customers' => 'Клиентское',
            'my_settings' => 'Мои настройки'
        ]
    ],
    'theme' => [
        'label' => 'Тема',
        'unnamed' => 'Безымянная тема',
        'name' => [
            'label' => 'Название темы',
            'help' => 'Название темы по ее уникальному коду. Например, RainLab.Vanilla'
        ]
    ],
    'themes' => [
        'install' => 'Установить темы',
        'search' => 'поиск тем для установки...',
        'installed' => 'Установленные темы',
        'no_themes' => 'Нет тем, установленных из магазина.',
        'recommended' => 'Рекомендуется',
        'remove_confirm' => 'Вы уверены, что хотите удалить выбранную тему?'
    ],
    'plugin' => [
        'label' => 'Плагин',
        'unnamed' => 'Безымянный плагин',
        'name' => [
            'label' => 'Имя плагина',
            'help' => 'Введите название плагина со своим уникальным кодом. Например, RainLab.Blog'
        ]
    ],
    'plugins' => [
        'manage' => 'Управление плагинами',
        'enable_or_disable' => 'Включить или выключить',
        'enable_or_disable_title' => 'Включение или отключение плагинов',
        'install' => 'Установить плагины',
        'install_products' => 'Установка расширений',
        'search' => 'поиск плагинов для установки...',
        'installed' => 'Установленные плагины',
        'no_plugins' => 'Нет плагинов, установленных из магазина.',
        'recommended' => 'Рекомендуется',
        'remove' => 'Удалить',
        'refresh' => 'Обновить',
        'disabled_label' => 'Отключить',
        'disabled_help' => 'Отключенные плагины будут игнорироваться.',
        'frozen_label' => 'Замораживание обновления',
        'frozen_help' => 'Плагины, которые были заморожены игнорируются в процессе обновления.',
        'selected_amount' => 'Выбрано плагинов: :amount',
        'remove_confirm' => 'Вы уверены, что хотите удалить этот плагин?',
        'remove_success' => 'Выбранные плагины успешно удалены.',
        'refresh_confirm' => 'Вы уверены?',
        'refresh_success' => 'Выбранные плагины успешно обновлены.',
        'disable_confirm' => 'Вы уверены?',
        'disable_success' => 'Плагин успешно отключен.',
        'enable_success' => 'Плагин успешно включен.',
        'unknown_plugin' => 'Плагин был удален из файловой системы.'
    ],
    'project' => [
        'name' => 'Проект',
        'owner_label' => 'Владелец',
        'attach' => 'Подключить проект',
        'detach' => 'Отсоединить проект',
        'none' => 'Не обнаружено',
        'id' => [
            'label' => 'Идентификатор проекта',
            'help' => 'Как найти идентификатор вашего проекта',
            'missing' => 'Пожалуйста, укажите идентификатор вашего проекта для использования.'
        ],
        'detach_confirm' => 'Вы уверены, что хотите отсоединить этот проект?',
        'unbind_success' => 'Проект был успешно отсоединен.'
    ],
    'settings' => [
        'menu_label' => 'Настройки',
        'not_found' => 'Не удается найти указанные настройки.',
        'missing_model' => 'На странице настроек отсутствует определение модели.',
        'update_success' => 'Настройки для :name успешно обновлены.',
        'return' => 'Вернуться к системным настройкам',
        'search' => 'Поиск'
    ],
    'mail' => [
        'log_file' => 'Файл журнала',
        'menu_label' => 'Настройки почты',
        'menu_description' => 'Управление настройками электронной почты.',
        'general' => 'Общее',
        'method' => 'Метод',
        'sender_name' => 'Имя отправителя',
        'sender_email' => 'Адрес отправителя',
        'php_mail' => 'PHP mail',
        'smtp' => 'SMTP',
        'smtp_address' => 'Сервер исходящей почты',
        'smtp_authorization' => 'Использовать SMTP авторизацию',
        'smtp_authorization_comment' => 'Активируйте эту опцию, если ваш SMTP-сервер требует авторизацию.',
        'smtp_username' => 'SMTP логин',
        'smtp_password' => 'SMTP пароль',
        'smtp_port' => 'SMTP порт',
        'smtp_ssl' => 'Использовать SSL',
        'sendmail' => 'Sendmail',
        'sendmail_path' => 'Sendmail Путь',
        'sendmail_path_comment' => 'Пожалуйста, укажите путь к sendmail.',
        'mailgun' => 'Mailgun',
        'mailgun_domain' => 'Mailgun домен',
        'mailgun_domain_comment' => 'Пожалуйста, укажите Mailgun домен.',
        'mailgun_secret' => 'Секретный API-ключ',
        'mailgun_secret_comment' => 'Введите ваш Mailgun API-ключ.',
        'mandrill' => 'Mandrill',
        'mandrill_secret' => 'Секретный ключ Mandrill',
        'mandrill_secret_comment' => 'Введите ваш Mandrill API-ключ.',
        'drivers_hint_header' => 'Драйвера не установлены',
        'drivers_hint_content' => 'Этот почтовый метод требует плагин ":plugin", установленный прежде, чем можно будет отправлять почту.'
    ],
    'mail_templates' => [
        'menu_label' => 'Шаблоны почты',
        'menu_description' => 'Изменение шаблонов писем, отправляемых пользователям и администраторам.',
        'new_template' => 'Новый шаблон',
        'new_layout' => 'Новый макет',
        'template' => 'Шаблон',
        'templates' => 'Шаблоны',
        'menu_layouts_label' => 'Макеты почты',
        'layout' => 'Макет',
        'layouts' => 'Макеты',
        'name' => 'Название',
        'name_comment' => 'Уникальное имя, используемое для обозначения этого шаблона',
        'code' => 'Код',
        'code_comment' => 'Уникальный код, используемый для обозначения этого шаблона',
        'subject' => 'Тема',
        'subject_comment' => 'Тема сообщения',
        'description' => 'Описание',
        'content_html' => 'HTML',
        'content_css' => 'CSS',
        'content_text' => 'Plaintext',
        'test_send' => 'Отправить тестовое сообщение',
        'test_success' => 'Тестовое сообщение было успешно отправлено.',
        'return' => 'Вернуться к списку шаблонов'
    ],
    'install' => [
        'project_label' => 'Присоединить к проекту',
        'plugin_label' => 'Установить плагин',
        'theme_label' => 'Установить тему',
        'missing_plugin_name' => 'Пожалуйста, укажите название плагина для установки.',
        'missing_theme_name' => 'Пожалуйста, укажите название темы для установки.',
        'install_completing' => 'Завершение процесса установки',
        'install_success' => 'Плагин был успешно установлен.'
    ],
    'updates' => [
        'title' => 'Менеджер обновлений',
        'name' => 'Обновление ПО',
        'menu_label' => 'Обновления',
        'menu_description' => 'Обновление системы, управление и установка плагинов и тем.',
        'return_link' => 'Вернуться к системе обновлений',
        'check_label' => 'Проверить обновления ',
        'retry_label' => 'Попробовать еще раз',
        'plugin_name' => 'Название',
        'plugin_code' => 'Код',
        'plugin_description' => 'Описание',
        'plugin_version' => 'Версия',
        'plugin_author' => 'Автор',
        'core_current_build' => 'Текущая сборка',
        'core_build' => 'Сборка :build',
        'core_build_help' => 'Последняя доступная сборка.',
        'core_downloading' => 'Загрузка файлов приложения',
        'core_extracting' => 'Распаковка файлов приложения',
        'plugins' => 'Плагины',
        'themes' => 'Темы',
        'disabled' => 'Отключено',
        'plugin_downloading' => 'Загрузка плагина: :name',
        'plugin_extracting' => 'Распаковка плагина: :name',
        'plugin_version_none' => 'Новый плагин',
        'plugin_current_version' => 'Текущая версия',
        'theme_new_install' => 'Новая тема установлена.',
        'theme_downloading' => 'Загрузка темы: :name',
        'theme_extracting' => 'Распаковка темы: :name',
        'update_label' => 'Обновить',
        'update_completing' => 'Завершение процесса обновления',
        'update_loading' => 'Поиск доступных обновлений...',
        'update_success' => 'Процесс обновления был успешно завершен.',
        'update_failed_label' => 'Не удалось выполнить обновление',
        'force_label' => 'Принудительно обновить',
        'found' => [
            'label' => 'Доступны новые обновления!',
            'help' => 'Выберите «Обновить», чтобы начать процесс обновления.'
        ],
        'none' => [
            'label' => 'Нет обновлений',
            'help' => 'Новые обновления не найдены.'
        ],
        'important_action' => [
            'empty' => 'Выберите действие',
            'confirm' => 'Подтвердите обновление',
            'skip' => 'Пропустить этот плагин (только один раз)',
            'ignore' => 'Пропустить этот плагин (всегда)',
        ],
        'important_action_required' => 'Необходимое действие',
        'important_view_guide' => 'Посмотреть руководство по обновлению',
        'important_alert_text' => 'Некоторые обновления требуют вашего внимания.',
        'details_title' => 'Информация о плагине',
        'details_view_homepage' => 'Перейти к домашней странице',
        'details_readme' => 'Документация',
        'details_readme_missing' => 'Документация не предоставлена.',
        'details_upgrades' => 'Инструкция по обновлению',
        'details_upgrades_missing' => 'Инструкция по обновлению не предоставлена.',
        'details_current_version' => 'Текущая версия',
        'details_author' => 'Автор',
    ],
    'server' => [
        'connect_error' => 'Ошибка подключения к серверу.',
        'response_not_found' => 'Сервер обновления не найден.',
        'response_invalid' => 'Неверный ответ сервера.',
        'response_empty' => 'Пустой ответ сервера.',
        'file_error' => 'Сервер не смог доставить пакет.',
        'file_corrupt' => 'Загруженный файл поврежден.'
    ],
    'behavior' => [
        'missing_property' => 'Класс :class должен содержать свойство $:property, используемое расширением :behavior.'
    ],
    'config' => [
        'not_found' => 'Не удалось найти конфигурационный файл :file, ожидаемый для :location.',
        'required' => "Для конфигурации, используемой в :location не указано свойство ':property'."
    ],
    'zip' => [
        'extract_failed' => "Невозможно извлечь файл ':file'."
    ],
    'event_log' => [
        'hint' => 'В этом журнале отображается список возможных ошибок, которые возникают в работе приложения, таких как исключения и отладочная информация.',
        'menu_label' => 'Журнал событий',
        'menu_description' => 'Просмотр системного журнала событий.',
        'empty_link' => 'Очистить журнал событий',
        'empty_loading' => 'Очищение журнала событий...',
        'empty_success' => 'Успешное очищение журнала событий.',
        'return_link' => 'Вернуться в журнал событий',
        'id' => 'ID',
        'id_label' => 'ID события',
        'created_at' => 'Дата & Время',
        'message' => 'Сообщение',
        'level' => 'Уровень'
    ],
    'request_log' => [
        'hint' => 'В этом журнале отображается список запросов браузера, которые могут потребовать внимания. Например, если посетитель открывает несуществующую страницу, то в журнале создается запись с кодом статуса 404.',
        'menu_label' => 'Журнал запросов',
        'menu_description' => 'Просмотр неудачных или перенаправленных запросов.',
        'empty_link' => 'Очистить журнал запросов',
        'empty_loading' => 'Очищение журнала запросов...',
        'empty_success' => 'Успешное очищение журнала запросов.',
        'return_link' => 'Вернуться к журналу запросов',
        'id' => 'ID',
        'id_label' => 'ID записи',
        'count' => 'Счетчик',
        'referer' => 'Источник запроса',
        'url' => 'Адрес',
        'status_code' => 'Статус'
    ],
    'permissions' => [
        'name' => 'Система',
        'manage_system_settings' => 'Настройка системных параметров',
        'manage_software_updates' => 'Управление обновлениями',
        'access_logs' => 'Просмотр системных логов',
        'manage_mail_templates' => 'Управление почтовыми шаблонами',
        'manage_mail_settings' => 'Управление настройками почты',
        'manage_other_administrators' => 'Управление другими администраторами',
        'view_the_dashboard' => 'Просмотр панели управления',
        'manage_branding' => 'Персонализация панели управления'
    ]
];
