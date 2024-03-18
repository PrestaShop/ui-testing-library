help: ## Display this help menu
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

check:
	npm run build

test: ## Build and copy to the dependencies directory for the project 
	rm dist -rf
	npm run build
	rm $(filter-out $@,$(MAKECMDGOALS))/tests/UI/node_modules/@prestashop-core/ui-testing/dist/ -r
	cp dist $(filter-out $@,$(MAKECMDGOALS))/tests/UI/node_modules/@prestashop-core/ui-testing/ -r
	cp package.json $(filter-out $@,$(MAKECMDGOALS))/tests/UI/node_modules/@prestashop-core/ui-testing/

.DEFAULT_GOAL := help