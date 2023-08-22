terraform {
  required_version = ">= 1.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "2.67.0"
    }
  }
}


provider "azurerm" {
  alias = "prueba"
  subscription_id = var.subscription_id
  client_id       = var.client_id
  client_secret   = var.client_secret
}

provider "azurerm" {
    features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-terraform"
  location = "westeurope"
}z|