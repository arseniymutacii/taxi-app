# taxi-app

Мобильное приложение заказа такси.

## Настройка фильтра
```bash
git config --local filter.mask_secrets.clean  "./git-filter.sh clean %f"
git config --local filter.mask_secrets.smudge "./git-filter.sh smudge %f"
git config --local filter.mask_secrets.required true
```
