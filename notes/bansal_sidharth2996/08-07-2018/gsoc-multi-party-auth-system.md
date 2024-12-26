---
title: "GSOC Multi Party Auth System "\ntagnames: 'software, gsoc, coding, soc, gsoc-2018, soc-2018, gsoc-2018-final, oauth, soc-2018-final, soc-2018-final-report'
author: bansal_sidharth2996
path: /notes/bansal_sidharth2996/08-07-2018/gsoc-multi-party-auth-system.md
nid: 16878
uid: 503599

---

# GSOC Multi Party Auth System 

by [bansal_sidharth2996](../profile/bansal_sidharth2996) | August 07, 2018 16:59

August 07, 2018 16:59 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [coding](../tag/coding), [soc](../tag/soc), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [gsoc-2018-final](../tag/gsoc-2018-final), [oauth](../tag/oauth), [soc-2018-final](../tag/soc-2018-final), [soc-2018-final-report](../tag/soc-2018-final-report)

----

![](http://i.imgur.com/MQdo60Z.png)

## GSoC 2018 Work Product - Sidharth Bansal

- **Student**: Sidharth Bansal
- **Github**: [SidharthBansal](https://github.com/sidharthbansal)
- **Organisation**: [Public Lab](https://publiclab.org/)

## Aim

To develop a Multi party authentication system for the website [publiclab.org](http://publiclab.org). :smiley: The system should enable users to

- log in through email and password
- log in through providers
- log out
- sign up through the sign up form
- sign up providers
- link and unlink providers
Four providers were needed to be included in the existing authentication system of public labs, namely Google, Github, Twitter and Facebook.

## Project

### Sign Up

1. Sign Up via the sign-up form: One can fill in the sign-up form available at [publiclab.org/signup](http://publiclab.org/signup) and create his/her account.
2. Sign Up via provider:

- Sign up via provider for New User: If he wants to sign up via provider then he/she logs in via his/her provider's account. Then a new account is generated for the user along with the provider's information as user-tag available on [www.publiclab.org/profile/user\_name](http://www.publiclab.org/profile/user_name) page. An email is sent so that he/she can set their password.
- Sign up of existing user: For an existing user, if he/she clicks on Sign Up via providers on the [www.publiclab.org](http://www.publiclab.org) then the provider's information is linked to his/her existing account and he/she is logged in. The existing user is checked via the email address in Public Lab database.

### Log In

A user can either log in via username and password or via clicking on desired provider's icon on the header or on [www.publiclab.org/login](http://www.publiclab.org/login).

### Linking of providers to the user account

A user can link multiple providers to his account by going to the [www.publiclab.org/edit](http://www.publiclab.org/edit) and connecting the desired provider.

### Delinking of a provider

A user may want to delete a provider so he/she can go to [www.publiclab.org/profile/user\_name](http://www.publiclab.org/profile/user_name) and can delete the `oauth:providers_name:uid` usertag.

### Linking of account to the same provider again

If a user tries to add another account of the same provider then he is notified with a flash message.

### Log Out

User can log out via public labs by clicking on the `log out` button available on the header of [www.publiclab.org](http://www.publiclab.org)

I have contributed to Public labs at multiple issues. My main project is broken down into following sections.
The following segments are completed.

### Implementation common to all providers

- Added omniauth gem and fiagro gem
- Installed Openssl
- Made localhost work under https connection
- Write Documentaion for openssl, omniauth and related gems
- Defined routes
- Modified UserTag to acts as identiy model
- Added OmniAuth Capability to User Model
- [Wiki Page](https://publiclab.org/oauth)

### Google Provider

- Added omniauth-google-oauth2 gem
- Set up developers app
- Added OmniAuth Configuration to initializer
- Wrote user session controller tests for the login through Google
- Wrote integration tests for the login through Google

### Github Provider

- Added omniauth-github gem
- Added OmniAuth Configuration to initializer
- Set up developers app
- Wrote user session controller tests for the login through Github
- Wrote integration tests for the login through Github

### Twitter Provider

- Added omniauth-twitter gem
- Set up developers app
- Added OmniAuth Configuration to initializer
- Wrote user sessions controller tests for the login through Twitter
- Wrote integration tests for the login through Twitter

### Facebook Provider

- Added omniauth-facebook gem
- Set up developers app
- Added OmniAuth Configuration to initializer
- Write user session controller tests for the login through Facebook
- Write integration tests for the login through Facebook

### Handling Security Vulnerabilities

- Introduction of Password checker field into user model
- Uid field filter on profile page - only the admin and the user himself can see the usertag
- Uid field filter on profile page - only the admin and the user himself can see the usertag tests

### Front End

- Header
- Profile Page
- Login Page
- Sign Up Page
- Edit Page

The first project that is Multi Party Authentication System is completed fully. It is tested under BDD and TDD with help of Minitest.
Second project of Bootstrap Upgradation could not be started due to other projects going on the website and need of website redesign.

## Additional Links

- [Main Tracking issue](https://github.com/publiclab/plots2/issues/2676)
- [Milestone](https://github.com/publiclab/plots2/milestone/18)
- [Deployment link](https://publiclab.org/signup)
- [Blogs](https://publiclab.org/profile/bansal_sidharth2996)
- [Issues Closed](https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3ASidharthBansal+is%3Aclosed+label%3Asummer-of-code)
- [Pull requests Merged](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3ASidharthBansal+is%3Aclosed+label%3Asummer-of-code)
- [Commits](https://github.com/publiclab/plots2/commits?author=SidharthBansal)
- [Power Point Presentation](https://docs.google.com/presentation/d/10cpV5ysdAB1EOuggYI_YWoMMI6X23krj4K1waLPnnI8/edit#slide=id.p)
- [Documentation](https://github.com/publiclab/plots2/blob/master/doc/Omniauth.md)

## Mentors

Special thanks to the Public Lab collaborators and following mentors.

- Jeffrey Warren
- Mayank Kashyap
- Ujjwal Sharma
- Emmanuel Hayford
- Liz Ebarry