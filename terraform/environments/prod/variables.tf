variable "vpc_cidr" {
  type        = string
  description = "CIDR block for the dev VPC"
}

variable "availability_zones" {
  type        = list(string)
  description = "Availability zones for dev"
}

variable "public_subnets" {
  type        = list(string)
  description = "Public subnet CIDRs"
}

variable "private_subnets" {
  type        = list(string)
  description = "Private subnet CIDRs"
}

variable "db_name" {
  type    = string
  default = "aakasha"
}

variable "db_username" {
  type      = string
  sensitive = true
}

variable "db_password" {
  type      = string
  sensitive = true
}

variable "db_instance_class" {
  type    = string
  default = "db.t3.micro"
}
