'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngStorage',
    'ui.router',
    'ngRoute', 
    'ui.bootstrap',
    'ui.load',
    'ui.jq',
    'ui.validate',
    'pascalprecht.translate',
    'firebase',
    // Filters
    'app.filters',
    'app.filters.url',
    'app.task',
    // Directives
    'app.directives',
    // Controllers
    'app.controllers',
    'app.controllers.login',
    'app.controllers.secure',
    'app.controllers.thread',
    'app.controllers.threads',
    'app.controllers.tasks',
    'app.controllers.task',
    'app.controllers.words',
    'app.controllers.word',
    'app.controllers.profile',
    'app.controllers.dashboard',
    // 'app.controllers.calendar',
    // Services
    'app.services.environment',
    'app.services.thread',
    'app.services.task',
    'app.services.user',
    'app.services.admin',
    'app.services.underscore',
    'app.services.twitterApp',
    'app.services.members',
    'app.services.calendar'
  ])
.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;        
    }
  ]
)
.config(
  [          '$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($stateProvider,   $urlRouterProvider,   $controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;

        $urlRouterProvider
            .otherwise('/home');
        $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: 'views/home.html'
            })            
            .state('login', {
              url: '/login',
              templateUrl: 'views/login.html',
              controller: 'LoginCtrl'
            })
            .state('register', {
              url: '/register',
              templateUrl: 'views/register.html',
              controller: 'LoginCtrl'
            })
            .state('forgotpwd', {
                url: '/forgotpwd',
                templateUrl: 'views/forgotpwd.html'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'views/404.html'
            })
            .state('secure', {
                abstract: true,
                url: '/secure',
                templateUrl: 'views/app.html',
                controller: 'SecureCtrl',
                resolve: {
                    currentUser: function (UserService) {
                    return UserService.getCurrentUser();
                    },
                    user: function (UserService) {
                    return UserService.getUser();
                    }
                }
            })
            .state('secure.threads', {
              url: '/threads',
              templateUrl: 'views/threads.html',
              controller: 'ThreadsCtrl',
              resolve: {
                threadsRef: function (ThreadService) {
                  return ThreadService.getThreads();
                },
                threadRef: function (ThreadService, $stateParams) {
                  return ThreadService.getThread($stateParams.threadId);
                }
              }
            })
            .state('secure.thread', {
              url: '/thread/:threadId',
              templateUrl: 'views/thread.html',
              controller: 'ThreadCtrl',
              resolve: {
                threadRef: function (ThreadService, $stateParams) {
                  return ThreadService.getThread($stateParams.threadId);
                },
                commentsRef: function (ThreadService, $stateParams) {
                  return ThreadService.getComments($stateParams.threadId);
                }
              }
            })
            .state('secure.compose', {
              url: '/compose',
              templateUrl: 'views/compose.html',
              controller: 'ThreadsCtrl',
              resolve: {
                threadsRef: function (ThreadService) {
                  return ThreadService.getThreads();
                },
                threadRef: function (ThreadService, $stateParams) {
                  return ThreadService.getThread($stateParams.threadId);
                }
              }
            })
            .state('secure.dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl',
                resolve: {
                  membersRef: function (MembersService) {
                    return MembersService.getMembers();
                  },
                  memberRef: function (MembersService, $stateParams) {
                    return MembersService.getMember($stateParams.memberId);
                  },
                  wordsRef: function (AdminService) {
                    return AdminService.getWords();
                  },
                  wordRef: function (AdminService, $stateParams) {
                    return AdminService.getWord($stateParams.wordId);
                  },
                  publishedRef: function (AdminService) {
                    return AdminService.getPublished();
                  }

                }

            })
            .state('secure.profile', {
                url: '/profile',
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl',
                resolve: {
                    currentUser: function (UserService) {
                    return UserService.getCurrentUser();
                    },
                    user: function (UserService) {
                    return UserService.getUser();
                    }
                }
            })
            .state('secure.editprofile', {
                url: '/editprofile',
                templateUrl: 'views/edit-profile.html',
                controller: 'ProfileCtrl',
                resolve: {
                    currentUser: function (UserService) {
                    return UserService.getCurrentUser();
                    },
                    user: function (UserService) {
                    return UserService.getUser();
                    }
                }
            })
            .state('secure.meeting', {
                url: '/meeting',
                templateUrl: 'views/meeting.html',
                controller: 'WordCtrl',
                resolve: {
                  wordRef: function (AdminService, $stateParams) {
                    return AdminService.getWord($stateParams.wordId);
                  },
                  draftsRef: function (AdminService, $stateParams) {
                    return AdminService.getDrafts($stateParams.wordId);
                  }
                }
            })
            .state('secure.tasks', {
                url: '/tasks',
                templateUrl: 'views/tasks.html',
                controller: 'TasksCtrl',
                resolve: {
                 tasksRef: function (TaskService) {
                    return TaskService.getTasks();
                 },
                 taskRef: function (TaskService, $stateParams) {
                  return TaskService.getTask($stateParams.taskId);
                 }
                }
            })
            .state('secure.task', {
              url: '/task/:taskId',
              templateUrl: 'views/task.html',
              controller: 'TaskCtrl',
              resolve: {
                taskRef: function (TaskService, $stateParams) {
                  return TaskService.getTask($stateParams.taskId);
                },
                commentsRef: function (TaskService, $stateParams) {
                  return TaskService.getComments($stateParams.taskId);
                }
              }
            })
            .state('secure.newtask', {
              url: '/newtask',
              templateUrl: 'views/newtask.html',
              controller: 'TasksCtrl',
              resolve: {
                tasksRef: function (TaskService) {
                  return TaskService.getTasks();
                }
              }
            })
            .state('secure.search', {
                url: '/search',
                templateUrl: 'views/search.html',
                controller: 'ProfileCtrl',
                resolve: {
                  membersRef: function (MembersService) {
                    return MembersService.getMembers();
                  },
                  memberRef: function (MembersService, $stateParams) {
                    return MembersService.getMember($stateParams.memberId);
                  }
              }
            })
            .state('secure.twitter', {
                url: '/twitter',
                templateUrl: 'views/twitter.html',
                controller: 'TwitterCtrl'
            })
            .state('secure.todo', {
                url: '/todo',
                templateUrl: 'views/todo.html',
                controller: 'TodoCtrl',
                resolve: {
                 tasksRef: function (TaskService) {
                    return TaskService.getTasks();
                 },
                 taskRef: function (TaskService, $stateParams) {
                      return TaskService.getTask($stateParams.taskId);
                 }
                }
            })
            .state('secure.signup', {
                url: '/signup',
                templateUrl: 'views/signup.html'
            })

            // fullCalendar
            .state('secure.calendar', {
                url: '/calendar',
                templateUrl: 'views/calendar.html',
                // use resolve to load other dependences
                resolve: {
                    // eventsRef: function (CalendarService) {
                    //   return CalendarService.getEvents();
                    // },
                    // eventRef: function (CalendarService, $stateParams) {
                    //   return CalendarService.getEvent($stateParams.eventId);
                    // },
                    deps: ['uiLoad',
                      function( uiLoad ){
                        return uiLoad.load( ['js/jquery/fullcalendar/fullcalendar.css',
                                             'js/jquery/jquery-ui-1.10.3.custom.min.js',
                                             'js/jquery/fullcalendar/fullcalendar.min.js',
                                             'js/app/calendar/ui-calendar.js',
                                             'js/app/calendar/calendar.js']);
                    }]
                }
            })

            //mail
            .state('secure.mail', {
                abstract: true,
                url: '/mail',
                templateUrl: 'views/mail.html',
                // use resolve to load other dependences
                resolve: {
                    deps: ['uiLoad',
                      function( uiLoad ){
                        return uiLoad.load( ['js/app/mail/mail.js',
                                             'js/app/mail/mail-service.js',
                                             'js/libs/moment.min.js']);
                    }]
                }
            })
            .state('secure.mail.list', {
                url: '/inbox/{fold}',
                templateUrl: 'views/mail.list.html'
            })
            .state('secure.mail.detail', {
                url: '/{mailId:[0-9]{1,4}}',
                templateUrl: 'views/mail.detail.html'
            })
            .state('secure.mail.compose', {
                url: '/compose',
                templateUrl: 'views/mail.new.html'
            })

            //admin
            .state('secure.admin', {
              url: '/words',
              templateUrl: 'views/admin-words.html',
              controller: 'WordsCtrl',
              resolve: {
                wordsRef: function (AdminService) {
                  return AdminService.getWords();
                }
              }
            })
            .state('secure.adminword', {
              url: '/words/:wordId',
              templateUrl: 'views/admin-word.html',
              controller: 'WordCtrl',
              resolve: {
                wordRef: function (AdminService, $stateParams) {
                  return AdminService.getWord($stateParams.wordId);
                },
                draftsRef: function (AdminService, $stateParams) {
                  return AdminService.getDrafts($stateParams.wordId);
                },
                publishedNewsRef: function (AdminService) {
                  return AdminService.getPublishedNews();
                },
                publishedPostsRef: function (AdminService) {
                  return AdminService.getPublishedPosts();
                },
                publishedMessagesRef: function (AdminService) {
                  return AdminService.getPublishedMessages();
                }
              }
            })
    }
  ]
)

/**
 * jQuery plugin config use ui-jq directive , config the js and css files that required
 * key: function name of the jQuery plugin
 * value: array of the css js file located
 */

.constant('JQ_CONFIG', {
    easyPieChart:   ['js/jquery/charts/easypiechart/jquery.easy-pie-chart.js'],
    sparkline:      ['js/jquery/charts/sparkline/jquery.sparkline.min.js'],
    plot:           ['js/jquery/charts/flot/jquery.flot.min.js', 
                        'js/jquery/charts/flot/jquery.flot.resize.js',
                        'js/jquery/charts/flot/jquery.flot.tooltip.min.js',
                        'js/jquery/charts/flot/jquery.flot.spline.js',
                        'js/jquery/charts/flot/jquery.flot.orderBars.js',
                        'js/jquery/charts/flot/jquery.flot.pie.min.js'],
    slimScroll:     ['js/jquery/slimscroll/jquery.slimscroll.min.js'],
    sortable:       ['js/jquery/sortable/jquery.sortable.js'],
    nestable:       ['js/jquery/nestable/jquery.nestable.js',
                        'js/jquery/nestable/nestable.css'],
    filestyle:      ['js/jquery/file/bootstrap-filestyle.min.js'],
    slider:         ['js/jquery/slider/bootstrap-slider.js',
                        'js/jquery/slider/slider.css'],
    chosen:         ['js/jquery/chosen/chosen.jquery.min.js',
                        'js/jquery/chosen/chosen.css'],
    TouchSpin:      ['js/jquery/spinner/jquery.bootstrap-touchspin.min.js',
                        'js/jquery/spinner/jquery.bootstrap-touchspin.css'],
    wysiwyg:        ['js/jquery/wysiwyg/bootstrap-wysiwyg.js',
                        'js/jquery/wysiwyg/jquery.hotkeys.js'],
    dataTable:      ['js/jquery/datatables/jquery.dataTables.min.js',
                        'js/jquery/datatables/dataTables.bootstrap.js',
                        'js/jquery/datatables/dataTables.bootstrap.css'],
    vectorMap:      ['js/jquery/jvectormap/jquery-jvectormap.min.js', 
                        'js/jquery/jvectormap/jquery-jvectormap-world-mill-en.js',
                        'js/jquery/jvectormap/jquery-jvectormap-us-aea-en.js',
                        'js/jquery/jvectormap/jquery-jvectormap.css'],
    footable:       ['js/jquery/footable/footable.all.min.js',
                        'js/jquery/footable/footable.core.css']
    }
)
;