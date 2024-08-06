help: ## Display this help menu
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

check:
	npm run build

test: ## Build and copy to the dependencies directory for the project
	rm -rf dist
	npm run build
	rm -r $(filter-out $@,$(MAKECMDGOALS))/tests/UI/node_modules/@prestashop-core/ui-testing/dist/
	cp -r dist $(filter-out $@,$(MAKECMDGOALS))/tests/UI/node_modules/@prestashop-core/ui-testing/
	cp package.json $(filter-out $@,$(MAKECMDGOALS))/tests/UI/node_modules/@prestashop-core/ui-testing/

.DEFAULT_GOAL := help
