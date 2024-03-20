ARG UBUNTU_VERSION=20.04

FROM ubuntu:${UBUNTU_VERSION} as system_deps

ENV DEBIAN_FRONTEND=noninteractive

SHELL ["/bin/bash", "-c"]

# development dependencies
RUN apt-get update -y && apt-get install -y \
  curl \
  git \
  unzip \
  sudo \
  python3 \
  && rm -rf /var/lib/apt/lists/*

#Create group and user
# ARG USER_ID=1000
# ARG GROUP_ID=1000

# RUN groupadd -g $GROUP_ID user &&\
#   useradd -m -u $USER_ID -g user -s /bin/bash user &&\
#   echo 'user ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

RUN groupadd -g 1000 user &&\
  useradd -m -u 1000 -g user -s /bin/bash user &&\
  echo 'user ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

USER user

# install aikup & aiken
RUN curl -sSfL https://install.aiken-lang.org | bash &&\
  export PATH=$PATH:/home/user/.aiken/bin &&\
  aikup

USER root

RUN mkdir -p /usr/local/share/bash-completion/completions &&\
  /home/user/.aiken/bin/aiken completion bash > /usr/local/share/bash-completion/completions/aiken &&\
  echo "source /usr/local/share/bash-completion/completions/aiken" >> /home/user/.bashrc

USER user

# install deno
RUN curl -fsSL https://deno.land/install.sh | sh &&\
  echo "export DENO_INSTALL=\"/home/user/.deno\"" >> /home/user/.bashrc &&\
  echo "PATH=\"\$DENO_INSTALL/bin:\$PATH\"" >> /home/user/.bashrc &&\
  rm -rf /var/lib/apt/lists/*

RUN echo "alias server-docs='python3 -m http.server -d /workspaces/haskell-and-cryptocurrencies/Kenya-2024/examples-aiken/docs/'" >> /home/user/.bashrc
RUN echo "alias run-script='deno run --allow-read --allow-write --allow-net --allow-env'" >> /home/user/.bashrc
