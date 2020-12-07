<?php 

declare(strict_types=1);

class ContaBancaria
{
	/**
	 * @var string
	 */
	private $banco;

	/**
	 * @var string
	 */
	private $nomeTitular;

	/**
	 * @var string
	 */
	private $numeroAgencia;

	/**
	 * @var string
	 */
	private $numeroConta;

	/**
	 * @var float
	 */
	private $saldo;

	public function __construct(
		string $banco, 
		string $nomeTitular, 
		string $numeroAgencia, 
		string $numeroConta, 
		float $saldo
	) {
		$this->banco = $banco;
		$this->nomeTitular = $nomeTitular;
		$this->numeroAgencia = $numeroAgencia;
		$this->numeroConta = $numeroConta;
		$this->saldo = $saldo;
	}

	public function obterSaldo() : string{
		return 'Seu saldo atual é: R$ ' . $this->saldo;
	}

	public function depositar(float $valor) : string{
		$this->saldo += $valor;
		return 'Depósito de R$ ' . $valor . 'realizado!';
	}

	public function sacar(float $valor) : string{
		$this->saldo -= $valor;
		return 'Saque de R$ ' . $valor . 'realizado!';
	}
}

$conta1 = new ContaBancaria(

	'Banco do Brasil', //banco

	'Anderson Felipe', //noeTitular

	'8244', //numeroAgencia

	'57354-10', //numeroConta

	0 //saldo

);

$conta2 = new ContaBancaria(

	'Banco Bradesco', //banco

	'Anderson Felipe', //noeTitular

	'0400', //numeroAgencia

	'0091900-0', //numeroConta

	9000 //saldo

);
//exit();
/*
echo $conta->obterSaldo();

echo PHP_EOL;

echo $conta->depositar(300.00);

echo PHP_EOL;

echo $conta->obterSaldo();

echo PHP_EOL;

echo $conta->sacar(150);

echo PHP_EOL;

echo $conta->obterSaldo();
*/

 ?>