module.exports = {
  apps: [
    {
      // 애플리케이션의 이름, PM2에서 사용
      name: 'vue_study',

      // 애플리케이션의 메인 스크립트 또는 진입점, Vue CLI 서비스 스크립트를 가리킴
      script: 'vue-cli-service.js',

      // 스크립트를 실행할 때 전달되어야 하는 명령행 인수, Vue CLI 서비스를 특정 포트(8000)로 실행하는 예시
      args: 'serve --port 8000',

      // 애플리케이션 인스턴스(프로세스)의 수, 이 예시에서는 1로 설정
      instances: 1,

      // 애플리케이션이 충돌할 경우 자동으로 재시작할지 여부
      autorestart: true,

      // 파일 변경을 감지하여 애플리케이션을 자동으로 다시 시작할지 여부, 이 예시에서는 비활성화
      watch: false,

      // 애플리케이션이 사용하는 메모리가 지정된 값(1G)을 초과하면 PM2가 재시작함
      max_memory_restart: '1G',
    },
  ],
};
