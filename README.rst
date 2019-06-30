SBooks_be
=========

Dự án website đọc sách/ truyện tranh
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Docker local
------------

::
  $ docker-compose -f local.yml build
::
  $ docker-compose -f local.yml up

Truy Cập vào container
::
  $ docker-compose -f local.yml run --rm app-name sh

Docker production
------------
::
  $ docker-compose -f production.yml build
::
  $ docker-compose -f production.yml up

Truy Cập vào container
^^^^^^^^^^^^^^^^^^^^^^

::
  $ docker-compose -f production.yml run --rm app-name sh

Docker clean all
------------

::
  $ docker system prune -a
  $ docker system prune --volumes -a
  $ docker container rm -f $(docker container ls -aq -a)
  $ docker image prune -a
  $ docker network prune

OwnCloud
------------
Using OwnCloud instead of AWS ...

https://owncloud.com/

https://hub.docker.com/_/owncloud


Xem tiếp từ ##Tiến hành cài đặt ownCloud
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

https://xuanthulab.net/cai-dat-owncloud-tao-dich-vu-luu-tru-dam-may-rieng-voi-docker.html

Truy cập vào OwnCloud
------------

::
  $ docker-compose -f local.yml run --rm owncloud sh

Có thể backup lại dữ liệu nếu cần thiết

Port List
------------


Django
^^^^^^

http://localhost:8000

OwnCloud
^^^^^^^^

http://localhost:9898