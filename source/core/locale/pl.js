/*
 * Gladiatus Crazy Addon Translation
 * Name : Polish
 * Code : pol
 * Tag  : pl
 * Translator: wupload, Legiss, Vanish_Si, Sorky96
 */

// Languages Object
var gca_languages = gca_languages || {};

// Set Language
gca_languages['pl'] = {
	name : 'Polski (Polish)',
	translators : ["wupload", "Legiss", "Vanish_Si", "Sorky96"],
	locale : {
		info : {
			description : "Zwariowany dodatek dla Gladiatusa"
		},
		general : {
			days : "Dni",
			minutes : "Minut",
			no_data : "Brak danych",
			confirm : "Potwierdź",
			cancel : "Anuluj",
			close : "Zamknij",
			error : "Błąd"
		},
		global : {
			life_potion_use : "Użyj mikstury życia",
			life_potion_used : "Użyto miksturę życia",
			life_potion_left : "Pozostało {{number}} mikstur życia",
			life_recover_full : "Pełne odzyskanie życia ",
			message_private_write : "Napisz prywatną wiadomość",
			message_guild_write : "Napisz wiadomość do gildii",
			message_send : "Wyślij",
			message_sent_success : "Wysłano wiadomość do gildii",
			message_sent_failed : "Błąd podczas wysyłania wiadomości",
			message_empty : "Brak wiadomości",
			message_exclude_me : "Wyklucz mnie",
			guild_market_goto : "Idź do rynku gildii",
			guild_storage_goto : "Przejdź do Magazynu",
			guild_bank_goto : "Przejdź do Banku Gildii",
			guild_warcamp_goto : "Przejdź do Wojennej Hali Sław",
			guild_jail_goto : "Przejdź do Negotium X",
			guild_library_goto : "Przejdź do Biblioteki",
			guild_medic_goto : "Przejdź do Medyka",
			simulator_goto : "Symulator ",
			stats_display : "Wyświetl moje statystyki",
			online_display : "Wyświetl graczy online",
			online_friends : "Przyjaciele online",
			guild_friends : "Przyjaciele gildyjni",
			family_friends : "Familia",
			donate_gold_confirm : "Czy na pewno chcesz przekazać {{number}} złota?",
			donate_gold_success : "Twoje złoto zostało przekazane",
			donate_gold_failed : "Wystąpił błąd podczas przekazywania złota",
			donate_gold_no_gold : "Brakuje złota, aby dokonać dotacji",
			donate_gold_all_gold : "Przeznacz całe złoto",
			quest_full : "Pełny",
			quest_new : "Nowe",
			pray_start : "Zacznij modlitwę",
			pray_stop : "Zakończ modlitwę",
			heal : "Ulecz",
			notification_guild_application : "Aktywna aplikacja w gildii!",
			low_durability_items : "Masz {{number}} przedmiotów z trwałością poniżej {{percent}}%",
			gold_exp_data_today : "Ostanie 24 godziny",
			gold_exp_data_week : "Ostatnie 7 dni",
			gold_exp_data_avg_day : "Średnie wartości na dzień",
			gold_exp_data_to_level_up : "ile dni pozostało do poziomu w górę",
			gold_exp_data_package_tax : "Tygodniowy podatek za paczki",
			gold_exp_data_total_exp : "Łącznie punkty doświadczenia",
			gold_exp_data_total_gold : "Łącznie złoto"
		},
		overview : {
			stats_difference : "Różnica",
			drop_item_see_materials_repair : "Upuść przedmiot, aby zobaczyć jakie składniki będą potrzebne do naprawy",
			workbench_6th_slot_empty : "6 slot w warsztacie musi być pusty"
		},
		pantheon : {
			mysterybox_open_all : "Otwórz wszystkie",
			mysterybox_open_stop : "Zatrzymaj",
			mysterybox_open_done : "Skończone!"
		},
		guild : {
			bank_all_gold : "Dodaj całe złoto",
			library_per_point_cost : "Koszt za punkt statystyki",
			library_gold_left : "Złoto do gildii po aktywacji",
			medic_lost_points : "Stracone punkty",
			medic_points_to_heal : "Punkty zdrowia",
			medic_life_after_heal : "Życie po uleczeniu"
		},
		expedition : {
			material_drop_chance : "{{number}}% szans na upuszczenie materiału"
		},
		training : {
			stats_points : "Punkty statystyk",
			points_breakdown : "Rozłożenie punktów",
			stats_calculated_with_yourself_as_an_opponent : "* Statystyki są obliczane na podstawie ataku samego siebie.",
			total_cost : "Suma ",
			costs_discount : "Zniżka treningu: {{number}}%"
		},
		auction : {
			number_of_items : "Liczba przedmiotów : {{number}}",
			number_of_bided_items : "Liczba licytowanych przedmiotów : {{number}}",
			hide_your_gold_here : "Tutaj spakuj swoje złoto",
			price_value_function : "Cena = Wartość + {{number}}",
			levels_you_can_see : "Możesz widzieć przedmioty od {{min}} poziomu do {{max}} poziomu.",
		},
		markets : {
			item_cost_only_x_gold : "Przedmiot kosztuje {{number}} złota.",
			item_is_soulbound : "Ten przedmiot jest związany z duszą.",
			are_you_sure_you_want_to_buy : "Jesteś pewny że chcesz to kupić?"
		},
		forge : {
			forge_ended : "Wykuwanie zakończone!",
			recraft_item : "Wykuj ponownie"
		},
		packages : {
			event_items : "Przedmioty eventowe",
			known_scroll : "Znasz ten zwój",
			unknown_scroll : "Nie znasz tego zwoju",
			advance_filters : "Zaawansowane filtry",
			advance_filters_apply : "Akceptuj filtr",
			advance_filters_clear : "Wyczyść filtr",
			advance_filters_found : "(znaleziono {{items}})"
		},
		settings : {
			//Ustawienia -- Ogólne
			settings : "Ustawienia",
			description : "Włącz lub wyłącz odpowiadające Ci funkcje!",
			description_click_button : "Kliknij przycisk poniżej, aby przejść do ustawień...",
			category_global : "Ustawienia ogólne",
			category_overview : "Przegląd ustawień",
			category_messages : "Wiadomości",
			category_packages : "Paczki",
			category_pantheon : "Panteon",
			category_reports : "Raporty",
			category_training : "Trening",
			category_merchants : "Kupcy",
			category_guild : "Gildia",
			category_auction : "Aukcje",
			category_forge : "Kuźnia",
			category_arena : "Arena",
			category_magus : "Magus",
			category_market : "Rynek",
			category_expedition : "Wyprawy",
			category_events : "Eventy",
			category_sound : "Dżwięki",
			category_data : "Dane",
			category_global$language_select : "Wybierz język dodatku",
			category_global$browser_notifications : "Włącz powiadomienia przeglądarki",
			category_global$extended_hp_xp_info : "Wyświetl informacje o HP i XP",
			category_global$extended_hp_xp_info_potion : "Wyświetl ikonę mikstury życia",
			category_global$hp_timer_for_full_life : "Wyświetl pozostałe minuty do całkowitego uleczenia",
			category_global$expedition_dungeon_points_recover_timer : "Wyświetl pozostałe minuty do odzyskania punktów wypraw/lochów",
			category_global$shortcuts_bar : "Pokaż pasek przycisków nagłówka",
			category_global$shortcuts_bar_buttons : "Wybierz przyciski na pasku nagłówka",
			category_global$auction_status_bar : "Wyświetl pasek statusu aukcji",
			category_global$auction_status_notification : "Pokaż zmianę statusu aukcji",
			category_global$top_fixed_bar : "Włącz górny pasek przewijania",
			category_global$advance_main_menu : "Popraw główne menu",
			category_global$submenu_click_to_change : "Zmiana karty (miasto/wyprawa) na kliknięcie",
			category_global$remember_tabs : "Pamiętaj ostatnią wybraną kartę u kupców",
			category_global$attacked_timers : "Pokaż licznik atakujących",
			category_global$quest_timer : "Pokaż status zadań lub licznik",
			category_global$merchants_timer : "Wyświetl czas kupców",
			category_global$forge_timers : "Wyświetl czas w kuźni/roztapiarce",
			category_global$notify_new_guild_application : "Powiadom mnie, gdy pojawi się nowe podanie do gildii",
			//category_global$check_guild_application_pinned_messages_interval : "Sprawdzaj podania do gildii (minuty)", // add pinned messages
			category_global$x_scroll : "Włącz przewijanie w poziomie",
			category_global$item_shadow : "Pokaż cienie przedmiotów",
			category_global$inventory_options_group : "Opcje ekwipunku",
			category_global$inventory_gold_info : "Pokaż wartość ekwipunku",
			category_global$pagination_layout : "Zmień układ strony z paczkami",
			category_global$gold_exp_data : "Pokaż dane złota i doświadczenia",
			category_global$pray_shorcut : "Pokaż skrót do modlitwy w hadesie",
			category_global$centurio_powerups_timers : "Pokaż czas Centuriona/Paktów na przycisku Premium",
			category_global$show_durability : "Pokaż wytrzymałość przemiotu w dolnym-lewym rogu",
			category_global$min_durability : "Powiadom mnie gdy wytrzymałość przedmiotu spadnie poniżej _% (przesuń na  0 aby to wyłączyć)",
			category_global$show_forge_info : "Pokaż potrzebne składniki do wykucia przedmiotu",
			category_global$show_mercenaries_real_name : "Wyświetlaj prawdziwe nazwy najemników na tooltipie",
			category_global$global_arena_timer : "Wyswietl zegar dla globalnej areny",
			//Ustawienia przegląd
			category_overview$analyze_items : "Analizuj statystyki przedmiotu",
			category_overview$food_life_gain : "Pokaż ile zdrowia przywraca jedzenie",
			category_overview$best_food : "Podświetl najbardziej odpowiednie jedzenie w stosunku do obecnego zdrowia",
			category_overview$overfeed_food : "Przyciemnij jedzenie, które leczy zbyt dużo zdrowia",
			category_overview$double_click_consume : "Podwójne kliknięcie przedmiotu użyje go",
			category_overview$daily_bonus_log : "Dzienne bonusy logowania",
			category_overview$buffs_detailed_time : "Pokaż czas trwania buffu gildii",
			category_overview$mercenaries_manager : "Pokaż menadżer najemników",
			category_overview$more_statistics : "Pokaż więcej statystyk na stronie statystyk",
			category_overview$mercenary_tooltip_show : "Pokaż tooltip najemników",
			category_overview$achivements_layout : "Popraw stronę osiągnięć",
			category_overview$costumes_layout : "Popraw stronę z kostiumami",
			category_overview$items_repair_overview : "Wyświetl okno do sprawdzenia potrzebnych składników do naprawy",
			//Ustawienia wiadomości
			category_messages$messages_layout : "Popraw interfejs wiadomości",
			category_messages$show_unread : "Podświetl nieprzeczytane wiadomości",
			category_messages$separate_days : "Oddziel wiadomości z innych dni",
			category_messages$more_guild_mate_info : "Pokaż więcej informacji o przyjacielach z gildii",
			category_messages$show_message_links : "Pokaż linki zawarte w wiadomości",
			category_messages$get_guild_battle_info : "Automatycznie załaduj informacje o atakach gildii",
			category_messages$show_sidebar : "Pokaż kategorie wiadomości",
			category_messages$fix_header_links : "Napraw błąd kliknięcia w wiadomość",
			category_messages$new_message_focus : "Ustaw natychmiastowe skupienie się na treści",
			category_messages$new_message_friend_list : "Włącz przycisk listy znajomych",
			//Ustawienia paczek
			category_packages$filters_layout : "Popraw układ filtrów",
			category_packages$compact_info_layout : "Kompaktowy układ informacji",
			category_packages$items_layout : "Popraw układ wyświetlania przedmiotów",
			category_packages$small_items_layout : "Mniejsze przedmioty",
			category_packages$load_more_pages : "Załaduj więcej stron",
			category_packages$pages_to_load : "Maksymalna liczba paczek do załadowania",
			category_packages$item_price : "Pokaż wartość przedmiotu",
			category_packages$special_category_features : "Włącz specjalne funkcje dla kategorii\n•Pokaż, czy scrolle są znane/nieznane\n•Pokaż, czy prefiks/sufiks ikony przewijania elementu jest nieznany",
			category_packages$double_click_open : "Włącz podwójne kliknięcie do otwarcia paczki",
			category_packages$advance_filter : "Zaawansowane filtry",
			//Ustawienia -- panteon
			category_pantheon$quests_reorder : "Włącz grupowanie zadań",
			category_pantheon$quests_detailed_rewards : "Pokaż dokładniej nagrody za zadanie",
			category_pantheon$missions_show_completed : "Pokaż ukończone zadania",
			category_pantheon$gods_show_points_percent : "Pokaż łaskę bogów w procentach",
			category_pantheon$open_many_mysteryboxes : "Otwórz więcej skrzyń boskiego zarządzenia",
			category_pantheon$show_mysterybox_rewards_rubies : "Pokaż wartość nagrody w rubinach",
			category_pantheon$show_mysterybox_rewards_owned : "Pokaż posiadaną kwotę nagrody za tajemniczą skrzynkę",
			//Ustawienia -- raporty
			category_reports$style_change : "Poprawa interfejs listy raportów",
			category_reports$load_loot_tooltips : "Załaduj nagrody z każdego raportu",
			category_reports$found_items : "Zbieraj dane o znalezionych przedmiotach",
			category_reports$battle_analyzer : "Przeanalizuj raport i pokaż statystyki życia",
			//ustawienia -- trening
			category_training$show_discount : "Pokaż zniżkę na trening",
			category_training$show_basics_in_bars : "Pokaż podstawy w pasku",
			category_training$multiple_train : "Włącz opcję wielokrotnego treningu",
			category_training$calculator_train : "Włącz kalkulator kosztu treningu",
			category_training$show_analyze_items_data : "Pokaż dane analizowanych danych w tooltipach",
			category_training$show_points_after_upgrade : "Pokaż statystyki po treningu",
			//Ustawienia -- najemnicy
			category_merchants$fade_unaffordable_items : "Przyciemnij za drogie przedmioty",
			category_merchants$show_shop_info : "Pokaż całkowitą wartość sklepu (złoto, rubiny)",
			category_merchants$double_click_actions : "Podwójne kliknięcie aby sprzedać/kupić przedmiot",
			//Ustawienia -- najemnicy
			category_forge$material_links : "[Kuźnia/Stół warsztatowy] Pokaż skróty do rynku/paczek do poszczególnych składników",
			category_forge$show_levels : "[Kuźnia] Pokaż poziom przedmiotu/prefixu/sufixu przed nazwą",
			category_forge$horreum_materials_names : "[Kuźnia] Pokaż nazwę składnika",
			category_forge$horreum_remember_options : "[Kuźnia] Zapamiętaj ostatnie ustawienia",
			category_forge$horreum_select_meterials : "[Kuźnia] Zaznacz materiały po kliknięciu",
			//Ustawienia -- arena
			category_arena$ignore_attack_confirmations : "Ignoruj ataki (powyżej 5 powiadomień ataku)",
			category_arena$show_simulator_imagelink : "Pokaż link do symulatora (simulator.dinodevs.com)",
			category_arena$sort_by_lvl : "Sortuj graczy na arenie według poziomu",
			category_arena$highlight_guild_members : "Podświetl graczy na innym serwerze gdty mogą to być członkowie gildii",
			category_arena$target_list : "Lista zaznaczonych graczy",
			//Ustawienia Magus
			category_magus$fade_unimprovable_items : "Przyciemnij przedmioty których nie możesz ulepszyć",
			//Ustawienia Rynek
			category_market$soulbound_warning : "Informacja o kupowaniu przedmiotu związanego z duszą",
			category_market$one_gold_warning : "Informacja o kupowaniu przedmiotu o wartości 1 złota",
			category_market$cancel_all_button : "Pokaż przycisk anulowania wszystkich wystawionych przedmiotów",
			category_market$remember_sell_duration : "Zapamiętaj ostatni wybrany czas trwania sprzedaży",
			category_market$sell_duration : "Wybierz domyślny czas trwania",
			category_market$one_gold_mode : "Wyświetl przycisk domyślnego ustawienia ceny wystawianego przedmiotu na 1 złota",
			category_market$remember_sort : "Zapamiętaj ostatnie sortowanie",
			category_market$double_click_select : "Wybierz przedmiot za pomocą podwójnego kliknięcia",			
			category_market$sell_warning_icons : "Ikona ostrzegalna podczas sprzedawania przedmiotów",
			category_market$sell_with_enter : "Sprzedaj przedmiot za pomocą ENTERA ⏎",
			// Ustawienia -- ekspedycje
			category_expedition$show_enemy_drops : "Pokaż jakie składniki można zdobyć z przeciwnika",
			category_expedition$underworld_layout : "Pokaż układ wrogów w podziemiach jak w widoku ekspedycji",
			//Ustawienia -- gildia
			category_guild$jail_layout : "Poprawa interfejsu więzienia",
			category_guild$library_layout : "Poprawa interfejsu biblioteki",
			category_guild$library_fade_non_scrolls : "Przyciemnij przedmioty które nie są błogosławieństwami",
			category_guild$library_tooltip_data : "Dodaj więcej danych do podpowiedzi biblioteki",
			category_guild$bank_donate_layout : "Poprawa interfejsu banku",
			category_guild$bank_book_layout : "Poprawa podręcznika interfejsu banku",
			category_guild$bank_book_show_changes : "Pokaż zmiany w wysokości darowizny od ostatniej wizyty w księdze banku",
			category_guild$medic_layout : "Poprawa interfejsu medyka",
			//Ustawienia -- aukcje
			category_auction$items_counters : "Wyświetlanie liczby przedmiotów i licytowanych przedmiotów",
			category_auction$more_search_levels : "Pokaż więcej opcji poziomów w filtrze",
			category_auction$item_price_analyze : "Analizuj cenę przedmiotów",
			category_auction$item_level : "Pokaż poziom przedmiotu",
			category_auction$x3_items_per_line : "Wyświetl 3 przedmioty w jednej linii",
			category_auction$multi_bids : "Licytuj przedmioty bez odświeżania strony",
			category_auction$extra_item_stats : "Pokaż dodatkowe statystyki na zdjęciu przedmiotu",
			category_auction$save_last_state : "Zapisz ostatnio wyszukiwane dane i załaduj je domyślnie",
			//Ustawienia -- eventy
			category_events$craps_timer : "Wyświetl czas trwania eventu",
			category_events$server_quest_timer : "Wyświetl zadania lub zegar wydarzenia na górze",
			//Ustawienia -- dzwięki
			category_sound$cooldown_sound_notifications : "Włącz dźwięk powiadomień (wyprawy, lochy, arena)",
			category_sound$muted : "Wycisz/wyłącz wyciszenie dźwięków",
			category_sound$volume : "Głośność dźwięków",
			//Ustawienia -- Dane
			category_data$export_settings : "Exportuj ustawienia danych",
			category_data$import_settings : "Importuj ustawienia danych",
			category_data$reset_settings : "Zresetuj ustawienia dodatku",
			category_data$clear_data : "Wyczyść wszystkie dane dodatku",			
			category_data$clear_cache_data : "Wyczyść pliki cache dodatku",
			category_data$cross_browser_login : "Zsynchronizuj przeglądarki",
			category_data$export_error_player_settings : "Wyeksportuj błędy do pliku",
			//Przyciski
			save : "Zapisz wszystko",
			export : "Export",
			import : "Import",
			reset : "Reset",
			clear : "Wyczyść",
			do_not_show : "Nie pokazuj",
			show_as : "Pokaż jako",
			show_info : "Pokaż informacje",
			each_category : "Działanie w kategorii docelowej",
			all_category : "Uruchom na kategorii docelowej i wszystkich",
			do_not_run : "Nie uruchamiaj",
			//Informacje
			translated_percent : "Przetłumaczone: {{number}}%",
			translated_by : "Przetłumaczone przez: {{string}}",
			reset_settings_confirm : "Jesteś pewny że chcesz zresetować ustawienia dodatku?",
			clear_data_confirm : "Jesteś pewny że chcesz wyczyścić wszystkie dane dodatku?",
			//Powiadomienia
			notification_reload : "Odśwież stronę, aby zobaczyć efekty"
		}
	}
}

gca_languages._active = "pl";
