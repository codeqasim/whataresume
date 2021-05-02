<?php
defined('BASEPATH') OR exit('No direct script access allowed');

// Main routes
$route['default_controller'] ="home";
$route['sitemap\.xml'] = "Sitemap";
$route['404_override'] = 'home/error';
$route['translate_uri_dashes'] = FALSE;

$route['about-us'] = "home/about";
$route['resume-writing'] = "home/resume_writing";
$route['cover-letter-writing'] = "home/cover_letter_writing";
$route['linkedin-profile-writing'] = "home/linkedin_profile_writing";
$route['career-coaching'] = "home/career_coaching";
$route['job-profiling'] = "home/job_profiling";
$route['career-coaching-service'] = "home/career_coaching_service";
$route['webpage-resume'] = "home/webpage_resume";
$route['resume-sample'] = "home/resume_sample";
$route['pricing'] = "home/pricing";
$route['reviews'] = "home/reviews";
$route['contact'] = "home/contact";

$route[ADMINURL.'accounts/chagne_order'] = "admin/accounts/chagne_order";
$route[ADMINURL.'cms/chagne_order'] = "admin/cms/chagne_order";
$route[ADMINURL.'cms/page_headings'] = "admin/cms/page_headings";
$route[ADMINURL.'accounts/delete_all'] = "admin/accounts/delete_all";
$route[ADMINURL.'accounts/update_status'] = "admin/accounts/update_status";
$route[ADMINURL.'accounts/delete_all_account_type'] = "admin/accounts/delete_all_account_type";
$route[ADMINURL.'accounts/types([a-zA-Z0-9]*)'] = "admin/accounts/types$1";
$route[ADMINURL.'accounts/(:any)'] = "admin/accounts/index/$1";
$route[ADMINURL.'login'] = "admin/auth/login";

$route['newslatters'] = "dashboard/newslatters";
$route['page/(:any)'] = "dashboard/page";

$route[ADMINURL.'blog/(:any)'] = "home/blog_detail/$1";
$route['blog/details/(:any)'] = "blogs/details/$1";
$route['blog/(:any)'] = "blog/index/$1";
$route['blog/search/(:any)'] = "blog/search/$1";