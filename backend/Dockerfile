FROM ubuntu

RUN apt-get update
RUN apt-get install -y software-properties-common vim
RUN apt-get update

RUN apt install -y python3.6 python3-pip
RUN apt-get install -y build-essential checkinstall \
             libx11-dev libxext-dev zlib1g-dev libpng-dev \
             libjpeg-dev libfreetype6-dev libxml2-dev libtiff-dev libsm6 libxext6 libxrender-dev

RUN python3.6 -m pip install pip --upgrade
RUN python3.6 -m pip install wheel

ENV PYTHONUNBUFFERED 1

RUN mkdir /code
WORKDIR /code

RUN mkdir /code/postgres_data
RUN chmod -R 777 /code/postgres_data

COPY requirements.txt /code/
RUN /bin/bash -c "pip3 install -r requirements.txt"

ADD . /code
